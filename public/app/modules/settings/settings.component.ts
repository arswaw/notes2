import {Component, OnInit} from '@angular/core';
//services
import {SettingsService} from './settings.service';

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

    constructor(private settings: SettingsService){
        this.categories = {
            items: false,
            users: false
        };
        this.items = [];
        this.itemsCols = [];
    }

    ngOnInit(){
        this.catInit();
    }

    private catInit(){

        this.settings.getItems().subscribe(
            (val) => this.itemsInit(val),
            (err) => console.log(err)
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

    private change(event){
        console.log(event)
    }
}