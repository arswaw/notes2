import { Injectable }             from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras }       from '@angular/router';
import { AuthService }            from './auth.service';

import {Page} from '../../models/page/page';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = state.url.split('/')[1];
    let pages: Array<Page> = this.auth.getPages();
    if (this.checkPage(pages, page)) {
        return true; 
    }else{
        this.router.navigate(['/login']);
        return false;
    }
  }

  private checkPage(pages: Array<Page>, page: string): boolean{
    let hold = false;
    for(let i in pages){
      if(pages[i].pageId == page){
        hold = true;
      }
    }
    return hold;
  }
}
