import {Component, OnInit} from '@angular/core';
//services
import {SettingsService} from './settings.service';
import {SpinnerService} from '../../services/spinner/spinner.service';

@Component({
    moduleId: module.id,
    selector: 'tech-notes',
    templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit{
    public categories: any;
    public items: Array<any>;
    public itemsCols: Array<any>;

    private selected: any;
    public searchFields: Array<any>;
    public searchPopup: boolean;

    constructor(private settings: SettingsService, private spin: SpinnerService){
        this.categories = {
            items: false,
            users: false
        };
        this.items = [];
        this.itemsCols = [];
        this.searchFields = [];
        this.searchPopup = false;
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

    private select(event){
        this.selected = event;
    }

    private selectPart(event){
        
    }

    private search(event){
        this.searchPopup = false;
    }

    private addItem(){
        console.log('item');
        this.searchPopup = true;
    }

    private addPart(){
        console.log('part');
        this.searchPopup = true;
    }

}