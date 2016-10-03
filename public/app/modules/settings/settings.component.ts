import {Component, OnInit} from '@angular/core';
//services
import {SettingsService} from './settings.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
//models
import {ItemDetail} from '../../models/item-detail/item-detail';
import {Location} from '../../models/item-detail/location';

@Component({
    moduleId: module.id,
    selector: 'tech-notes',
    templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit{
    private categories: any;
    private items: Array<any>;
    private itemsCols: Array<any>;
    private selected: any;
    private searchFields: Array<any>;
    private searchPopup: boolean;
    private searchId: string;
    private searchTitle: string;

    constructor(private settings: SettingsService, private spin: SpinnerService){
        this.categories = {
            items: false,
            users: false
        };
        this.items = [];
        this.itemsCols = [];
        this.searchFields = [];
        this.searchPopup = false;
        this.searchId = '';
        this.searchTitle = '';
        spin.clearSpin();
    }

    ngOnInit(){
        this.catInit();
        this.searchFields = this.settings.searchInit();
    }


    private catInit(){
        this.spin.spinStart('items');
        this.settings.getItems().subscribe(
            (val) => this.itemsInit(val),
            (err) => console.log(err),
            () => this.spin.spinStop('items')
        ) 
    }

    private itemsInit(items: any){
        console.log(items)
        this.itemsCols = [
            {
                label: 'Description',
                id: 'desc',
                sort: false,
                type: 'static'
            },
            {
                label: 'Item Id',
                id: 'itemId',
                sort: false,
                type: 'static'
            }
        ]
        this.items = items;
    }

    private selectItem(event){
        this.selected = event;
    }

    private selectPart(event){
        
    }

    private search(event){
        this.searchPopup = false;
        if(!event.close){
            let value: string;
            let type: string;
            for(let i in event.fields){
                let field = event.fields[i];
                if(field.fieldId == 'value'){
                    value = field.value;
                }
                if(field.fieldId == 'type'){
                    type = field.value;
                }
            }
            let obj = {
                value: value,
                type: type,
                part: false,
                parent: ''
            };
            if(event.id == 'part'){
                obj.part = true;
                obj.parent = this.selected.itemId;
            }
            this.settings.addItem(obj).subscribe(
                (val) => this.procItem(val),
                (err) => console.log(err)
            )
        }
    }

    private procItem(obj){
        console.log(obj);
        let item = new ItemDetail(obj);
        console.log(item);
    }

    private addItem(){
        this.searchId = 'item';
        this.searchTitle = 'Add Item'
        this.searchFields = this.settings.searchInit();
        this.searchPopup = true;
    }

    private addPart(){
        this.searchId = 'part';
        this.searchTitle = 'Add Part';
        this.searchFields = this.settings.searchInit();
        this.searchPopup = true;
    }

}