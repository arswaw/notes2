import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {UtilService} from '../../../services/util/util.service';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
})
export class ListComponent implements OnChanges{
    private cols:any = {};
    constructor(private util: UtilService){}

    @Input() rows: Array<any> = [];

    @Input() columns: Array<any>;

    @Output() select = new EventEmitter();
    @Output() change = new EventEmitter();

    ngOnChanges(changes: {[key: string]: SimpleChange}){
        for(let key in changes){
            if(key == 'rows'){
                let rows = changes[key].currentValue;
                let hold = [];
                for(let i in rows){
                    let row = rows[i];
                    row._id = this.util.genGUID();
                    hold.push(row);
                }
                this.rows = hold;
            }
        }
        
    }

    private changed(event){
        this.change.emit(event);
    }

    private clicked(obj){
        this.highlight(obj);
        this.select.emit(obj);
    }
    
    private sorter(col: string){
        if(this.cols[col] == undefined){
           this.cols[col] = false; 
        }
        this.rows.sort(this.dynamicSort(col));
    }

    private highlight(obj){
        for(let i in this.rows){
            if(this.rows[i]._id == obj._id){
                this.rows[i].selected = true;
            }else{
                this.rows[i].selected = false;
            }
        }
    }
    
    private dynamicSort(property) {
        var dir = 1;
        if(this.cols[property]){
            dir = -1;
            this.cols[property] = false;
        }else{
            this.cols[property] = true;
        }
        return function (a,b) {
            var a2;
            var b2;
            if(!isNaN(a[property]) && !isNaN(b[property])){
                a2 = parseInt(a[property], 10);
                b2 = parseInt(b[property], 10);
            }else{
                a2 = a[property].toLowerCase();
                b2 = b[property].toLowerCase()
            }
            var result = (a2 < b2) ? -1 : (a2 > b2) ? 1 : 0;
            return result * dir;
        }
    }
}