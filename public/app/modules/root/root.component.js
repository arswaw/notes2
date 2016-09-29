"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//components
var spinner_component_1 = require('../../services/spinner/spinner.component');
var message_component_1 = require('../../services/message/message.component');
//models
var page_1 = require('../../models/page/page');
var RootComponent = (function () {
    function RootComponent(router) {
        this.router = router;
        this.pages = [
            new page_1.Page({
                "label": "Receiving",
                "pageId": "receiving",
                "icon": "fa-truck"
            }),
            new page_1.Page({
                "label": "Repairs",
                "pageId": "repairs",
                "icon": "fa-reply fa-flip-vertical"
            }),
            new page_1.Page({
                "label": "QC",
                "pageId": "quality",
                "icon": "fa-check-square-o"
            }),
            new page_1.Page({
                "label": "Settings",
                "pageId": "settings",
                "icon": "fa-cog"
            }),
        ];
    }
    RootComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tech-notes',
            templateUrl: 'root.component.html',
            styleUrls: ['root.component.css'],
            directives: [
                spinner_component_1.SpinnerComponent,
                message_component_1.MessageComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map