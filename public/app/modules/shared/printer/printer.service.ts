import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {UtilService} from '../../../services/util/util.service';
import {AuthService} from '../../../services/auth/auth.service';

@Injectable()
export class PrintService {
    constructor (private http: Http, private util: UtilService, private auth: AuthService) {}

    public getPrinters(): Observable<any>{
        let headers = new Headers({ 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('print')
            .map(function(res: Response){
                let body = res.json();
                return body;
            })
            .catch(this.util.handleError);
    }

    public print(print): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('print', JSON.stringify(print), options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            })
            .catch(this.util.handleError);
    }
}