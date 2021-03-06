import {EventEmitter, Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

import {Constants} from "../../constants";

@Injectable()
export class AuthService {

    basePath: string = 'api/auth';
    baseUrl = Constants.baseUrl + this.basePath;

    public showModal = new EventEmitter<boolean>();
    public confirm = new EventEmitter<boolean>();
    public dismissCurrentModal = new EventEmitter<boolean>();

    private adminRole:string = Constants.adminRole;
    private buyerRole:string = Constants.buyerRole;
    private sellerRole:string = Constants.sellerRole;

    constructor(private http: Http) {

    }

    public authenticate(): Observable<boolean> {
        // do something to make sure authentication token works correctly

        if (this.isLoggedIn()) {
            return Observable.of(true);
        }


        this.showModal.emit(true);
        return Observable.create(observer => {
            this.confirm.subscribe(r => {
                this.showModal.emit(false);
                observer.next(r);
                observer.complete();
            });
        });

    }

    public authenticateFromModal(): Observable<boolean> {
        // do something to make sure authentication token works correctly

        if (this.isLoggedIn()) {
            return Observable.of(true);
        }


        this.dismissCurrentModal.emit(true);
        return Observable.create(observer => {
            this.confirm.subscribe(r => {
                this.dismissCurrentModal.emit(false);
                observer.next(r);
                observer.complete();
            });
        });

    }

    signIn(email: string, password: string) {

        const userData = {
            email: email,
            password: password
        };

        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.baseUrl + '/login', userData, {headers: headers})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const decoded = this.decodeToken(token);
                    console.log('decoded: ', decoded);
                    return {
                        token: token,
                        decoded: decoded
                    }
                }
            )
            .do( // do is executed everytime the subscribe fires
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }

    isLoggedIn() {

        const token = this.getToken();

        if (typeof token === 'undefined' || token === null) {
            return false;
        }

        const decodedTokenData = this.decodeToken(token);

        if (typeof decodedTokenData.exp == 'undefined') {
            return false;
        }

        const expTimestamp = decodedTokenData.exp * 1000;
        // const refreshTimestamp = decodedTokenData.nbf*1000;
        const todaysTimestamp = new Date().getTime();

        if (expTimestamp < todaysTimestamp) {
            this.removeToken();
            return false;
        }

        return true;
    }

    isValidRole(role: string) {

        const token = this.getToken();

        if (typeof token === 'undefined' || token === null) {
            return false;
        }

        const decodedTokenData = this.decodeToken(token);

        if (typeof decodedTokenData.role == 'undefined') {
            return false;
        }

        if (decodedTokenData.role !== role) {
            return false;
        }

        return true;
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getPermissions(): string[] {

        const token = this.getToken();
        let permissions = [];

        if (typeof token === 'undefined' || token === null) {
            return permissions;
        }

        const decodedTokenData = this.decodeToken(token);

        if (typeof decodedTokenData.role == 'undefined') {
            return permissions;
        }

        return decodedTokenData.permissions;
    }

    getStoreId(): number {

        const token = this.getToken();

        if (typeof token === 'undefined' || token === null) {
            return null;
        }

        const decodedTokenData = this.decodeToken(token);

        if (typeof decodedTokenData.store_id == 'undefined') {
            return null;
        }

        return decodedTokenData.store_id;
    }

    getUserId(): number {

        const token = this.getToken();

        if (typeof token === 'undefined' || token === null) {
            return null;
        }

        const decodedTokenData = this.decodeToken(token);

        if (typeof decodedTokenData.user_id == 'undefined') {
            return null;
        }

        return decodedTokenData.user_id;
    }

    decodeToken(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    validateUserPrivileges(roleCodes:string[]): boolean {

        const userPrivileges = roleCodes;
        const authService = this;
        let hasPrivilege = false;

        userPrivileges.forEach(function(role){

            const isValidRole = authService.isValidRole(role);

            if(isValidRole){
                hasPrivilege = isValidRole;
            }

        });

        return hasPrivilege;

    }

    validateAdminPrivileges(): boolean{

        return this.validateUserPrivileges([this.adminRole]);

    }

    validateSellerPrivileges(): boolean{

        return this.validateUserPrivileges([this.sellerRole]);

    }

    validateBuyerPrivileges(): boolean{

        return this.validateUserPrivileges([this.buyerRole]);

    }
}