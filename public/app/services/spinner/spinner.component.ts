import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnInit{
    private spin: boolean;
    sub:Subscription;
    constructor(private ss: SpinnerService){
        
    }

    ngOnInit(){
        this.sub = this.ss.spinner.subscribe(
            spin => this.spin = spin
        )
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.sub.unsubscribe();
    }
}