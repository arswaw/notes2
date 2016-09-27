import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Page} from '../../models/page/page';

@Component({
    moduleId: module.id,
    selector: 'tech-notes',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [

    ]
})
export class RootComponent {
    private pages: Array<Page>;

    constructor(private router: Router){//for augury router view
        this.pages = [
            new Page({
                "label": "Receiving",
                "pageId": "receiving",
                "icon": "fa-truck"
            }),
            new Page({
                "label": "Repairs",
                "pageId": "repairs",
                "icon": "fa-reply fa-flip-vertical"
            }),
            new Page({
                "label": "QC",
                "pageId": "quality",
                "icon": "fa-check-square-o"
            }),
            new Page({
                "label": "Settings",
                "pageId": "settings",
                "icon": "fa-cog" 
            }),
        ];
    }
}