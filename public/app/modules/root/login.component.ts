import {Component}        from '@angular/core';
import {Router} from '@angular/router';
//services
import {AuthService} from '../../services/auth/auth.service';
//models
import {Page} from '../../models/page/page';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    private user: string;
    private pass: string;

    constructor(private auth: AuthService, private router: Router){
        this.user = '';
        this.pass = '';
    }

    private login(){
        this.auth.login(this.user, this.pass).subscribe(
            val => this.userInit(val),
            err => console.log(err)
        )
    }

    private userInit(user){
        let hold = [];
        for(let i in user.roles){
            let role = user.roles[i];
            for(let i2 in role.permissions.view){
                var per = role.permissions.view[i2];
                var page = new Page(per);
                hold.push(page);
            }
        }
        this.auth.setUser(user.user);
        this.auth.setPages(hold);
        this.auth.setToken(user.token.value);
        this.auth.setSettings(user.settings);
        let home = user.settings.home;
        this.router.navigate([home]);
    }
}