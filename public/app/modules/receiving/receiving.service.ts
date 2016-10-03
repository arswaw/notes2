import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {UtilService} from '../../services/util/util.service';
import {AuthService} from '../../services/auth/auth.service';

@Injectable()
export class ReceivingService {

    constructor (private http: Http, private util: UtilService, private auth: AuthService) {
    }

    public byTracking(id: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('tracking', '{"id":"'+id+'"}', options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            }).catch(this.util.handleError);
    };

    public getRMA(id: string): any {
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/rma', '{"id":"'+id+'"}', options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            })
            .catch(this.util.handleError);
    };

    public received(obj): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/received', JSON.stringify(obj), options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            })
            .catch(this.util.handleError);
    }

    public getDefaultPrinter(): number{
        let settings = this.auth.getSettings();
        if(settings.printer){
            return settings.printer;
        }else{
            return 146359;
        }
    }

    public recInit(): any{
        let obj = {
            fields: [
                {
                    controlType: 'select',
                    label: 'Charger',
                    options: [
                        {key: 'Missing', value: 'Missing'},
                        {key: 'Present', value: 'Present'}
                    ]
                },
                {
                    controlType: 'text',
                    label: 'SN: '
                }
            ],
            columns: [
                {
                    label: 'SKU',
                    id: 'sku',
                    sort: false,
                    type: 'static'
                },
                {
                    label: 'Description',
                    id: 'description',
                    sort: false,
                    type: 'static'
                },
                {
                    label: 'Quantity',
                    id: 'qty',
                    sort: false,
                    type: 'static'
                }
            ]
        };
        return obj;
    }

    public getSwagColumns(): Array<any>{
        let arr = [
            {
                label: 'SKU',
                id: 'sku',
                sort: false,
                type: 'static',
            },
            {
                label: 'Description',
                id: 'description',
                sort: false,
                type: 'select',
                options: [
                    {
                        key: 'SWAGWAY X1 - Black',
                        value: 'SWAGWAY X1 - Black'
                    },
                    {
                        key: 'SWAGWAY X1 - Blue',
                        value: 'SWAGWAY X1 - Blue'
                    },
                    {
                        key: 'SWAGWAY X1 - Dark Red',
                        value: 'SWAGWAY X1 - Dark Red'
                    },
                    {
                        key: 'SWAGWAY X1 - Gold',
                        value: 'SWAGWAY X1 - Gold'
                    },
                    {
                        key: 'SWAGWAY X1 - Green',
                        value: 'SWAGWAY X1 - Green'
                    },
                    {
                        key: 'SWAGWAY X1 - Pink',
                        value: 'SWAGWAY X1 - Pink'
                    },
                    {
                        key: 'SWAGWAY X1 - Red',
                        value: 'SWAGWAY X1 - Red'
                    },
                    {
                        key: 'SWAGWAY X1 - White',
                        value: 'SWAGWAY X1 - White'
                    }
                ]
            },
            {
                label: 'Quantity',
                id: 'qty',
                sort: false,
                type: 'static'
            }
        ];

        return arr;
    }
}