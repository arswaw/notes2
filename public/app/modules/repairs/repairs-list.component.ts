import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
//services
import {RepairsService} from './repairs.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
//models
import {RmaSum} from '../../models/rma-sum/rma-sum';

@Component({
    moduleId: module.id,
    templateUrl: 'repairs-list.component.html',
})
export class RepairsListComponent implements OnInit{
    public columns: Array<any>;
    public rows: Array<RmaSum>;
    public page: string;
    constructor(private router: Router, private comms: RepairsService, private spin: SpinnerService){
        this.page = 'repairs-list';
        spin.clearSpin();
    }

    ngOnInit(){
        this.spin.spinStart('rmas');
        this.comms.getRMAs().subscribe(
            rmas => this.tableInit(rmas),
            error => console.log(error),
            () => this.spin.spinStop('rmas')
        )
    }

    private scan(event){
        this.router.navigate(['repairs', event.value]);
    }

    private select(event){
        this.router.navigate(['repairs', event.tranid]);
    }

    private tableInit(rows: Array<any>){
        let obj = {};
        let arr = [
            {
                label: 'TranID',
                id: 'tranid',
                type: 'static',
                sort: false
            },
            {
                label: 'Customer',
                id: 'name',
                type: 'static',
                sort: false
            },
            {
                label: 'SKU',
                id: 'sku',
                type: 'static',
                sort: false
            },
            {
                label: 'Description',
                id: 'description',
                type: 'static',
                sort: false
            },
            {
                label: 'Status',
                id: 'status',
                type: 'static',
                sort: false
            },
            {
                label: 'Date',
                id: 'trandate',
                type: 'static',
                sort: false
            },
            {
                label: 'Internal Note',
                id: 'internal',
                type: 'static',
                sort: false
            }
        ]
        this.columns = arr;
        let hold = [];
        for(let i in rows){
            let row = rows[i];
            let sum = new RmaSum(row);
            obj[sum.sku] = sum;
            hold.push(sum);
        }
        console.log(obj);
        this.rows = hold;
    }
}