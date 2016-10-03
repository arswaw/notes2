import {Component} from '@angular/core';
import { Router } from '@angular/router';

//services
import {ReceivingService} from './receiving.service';
@Component({
    moduleId: module.id,
    templateUrl: 'scan-wrap.component.html',
    providers: [
        ReceivingService
    ]
})
export class ScanWrapComponent{
    constructor(private router: Router, private data: ReceivingService){
        
    }

    private scanned(event){ // triggers on enter key down in scanner 
        let num = event.value;
        if(num.length > 17){ // check for tracking number
            this.data.byTracking(num)
                .subscribe(
                    res => this.tracking(res),
                    err => console.log(err)
                )
        }else{
            this.router.navigate(['/receiving', num]);
        }
    }

    private tracking(obj: any){
        let id = obj[0].columns.transactionnumber;
        this.router.navigate(['/receiving', id]);
    }
}