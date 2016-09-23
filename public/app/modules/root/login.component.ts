import {Component}        from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    private user: string;
    private pass: string;

    constructor(){
        this.user = '';
        this.pass = '';
    }

    private login(){
        console.log(this.user);
        console.log(this.pass);
    }
}