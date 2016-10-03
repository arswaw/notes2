import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
//services
import {UtilService} from '../util/util.service';
//models
import {Page} from '../../models/page/page';

@Injectable()
export class AuthService {
    private _token: string;
    private _user: string;
    private _pages: Array<Page>;
    private _settings: any;

    private usernameSource = new Subject<string>();
    public username = this.usernameSource.asObservable();

    private pagesSource = new Subject<Page[]>();
    public pages = this.pagesSource.asObservable();

    constructor(private http: Http, private util: UtilService){
        this._token = '';
        this._user = '';
        this._pages = [];
    }

    public login(user: string, pass: string) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('login', '{"user":"'+user+'", "pass": "'+pass+'"}', options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            }).catch(this.util.handleError);
    }

    // setters
    public setUser(user: string){
        this._user = user;
        this.usernameSource.next(user);
    }

    public setPages(pages: Array<Page>){
        this._pages = pages;
        this.pagesSource.next(pages);
    }

    public setToken(token: string){
        this._token = token;
    }

    public setSettings(obj){
        this._settings = obj;
    }

    //getters
    public getUser(): string{
        return this._user;
    }

    public getToken(): string{
        return this._token;
    }

    public getPages(): Array<Page>{
        return this._pages;
    }

    public getSettings(): any{
        return this._settings;
    }
}