import {Component, OnInit} from '@angular/core';
//services
import {SettingsService} from './settings.service';

@Component({
    moduleId: module.id,
    selector: 'tech-notes',
    templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit{
    public categories: Array<any>;

    constructor(private settings: SettingsService){
        this.categories = [];
    }

    ngOnInit(){
        this.catInit();
    }

    private catInit(){
        this.categories = [
            {
                "label": "Repair Items",
                "type": "category",
                "active": false
            },
            {
                "label": "Users",
                "type": "category",
                "active": false
            }
        ]
        this.settings.getItems().subscribe(
            (val) => this.itemsInit(val),
            (err) => console.log(err)
        ) 
    }

    private itemsInit(items: any){
        console.log(items);
    }
}