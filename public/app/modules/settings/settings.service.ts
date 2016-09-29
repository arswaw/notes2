import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
//services
import {UtilService} from '../../services/util/util.service';
import {AuthService} from '../../services/auth/auth.service';
//models
import {TextField} from '../../models/field/text-field';
import {HCheckField} from '../../models/field/hcheck-field';
import {ObjectField} from '../../models/field/object-field';
import {SelectField} from '../../models/field/select-field';
import {VCheckField} from '../../models/field/vcheck-field';
import {PairField} from '../../models/field/pair-field';
import {TextareaField} from '../../models/field/textarea-field';
import {StaticField} from '../../models/field/static-field';
import {RadioField} from '../../models/field/radio-field';

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

    public searchInit(): Array<any>{
        let arr = [
            new TextField({label: 'Item Id or SKU', required: true}),
            new RadioField({label: 'Type', options: [{key: 'itemId', value: 'Item Id'}, {key: 'sku', value: 'SKU'}], required: true})
        ];
        return arr;
    }
}