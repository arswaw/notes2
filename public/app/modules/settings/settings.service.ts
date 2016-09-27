import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {UtilService} from '../../services/util/util.service';
import {AuthService} from '../../services/auth/auth.service';

@Injectable()
export class SettingsService {

    constructor (private http: Http,  private auth: AuthService, private util: UtilService) {
    }

    public getItems(): Observable<any>{
        let headers = new Headers({ 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('/items', options)
            .map((res: Response) =>{
                var json = res.json();
                return json;
            })
            .catch(this.util.handleError);
    }
}