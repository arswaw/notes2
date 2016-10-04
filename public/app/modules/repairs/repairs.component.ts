import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//services
import {RepairsService} from './repairs.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
//models
import {Form} from '../../models/field/form';

@Component({
    moduleId: module.id,
    templateUrl: 'repairs.component.html',
    styleUrls: ['repairs.component.css'],
})
export class RepairsComponent implements OnInit{
    private id: string;
    private page: string;
    private serial: string;
    private additional: string;
    private info: Array<Form>;
    private review: Array<Form>;
    private notes: Array<Form>;
    constructor(private comms: RepairsService, private spin: SpinnerService, private route: ActivatedRoute){
        this.page = 'repairs';
        this.serial = '';
        this.additional = '';
        this.info = [this.comms.getInfo()];
        this.review = [this.comms.getReview()];
        this.notes = [this.comms.getBlankNotes()];
        this.spin.clearSpin();
    }

    ngOnInit(){
        this.id = parseInt(this.route.snapshot.params['id'], 10).toString();
        this.spin.spinStart('rma');
        this.comms.getRMA(this.id)
            .subscribe(
                rma => this.procRma(rma),
                err => console.log(err),
                () => this.spin.spinStop('rma')
            );
    }

    private procRma(rma){
        console.log(rma);
    }

    private submit(){
        console.log('submit')
    }
}