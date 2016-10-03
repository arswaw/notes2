import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//services
import {ReceivingService} from './receiving.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
//models
import {Rma} from '../../models/rma/rma';

@Component({
    moduleId: module.id,
    templateUrl: 'receiving.component.html',
})
export class ReceivingComponent implements OnInit{
    private id: string;
    private page: string;
    private serial: string;
    private charger: string;
    private printerId: number;
    private selected: any;
    private sel: boolean;
    private columns: Array<any>;
    private fields: Array<any>;
    private rma: Rma;

    constructor(private route: ActivatedRoute, private comms: ReceivingService, private router: Router, private spin: SpinnerService){
        this.page = 'receiving';
        this.sel = false;
        this.charger = '';
        this.serial = '';
        this.selected = {};
        spin.clearSpin();
        let obj = comms.recInit();
        this.columns = obj.columns;
        this.fields = obj.fields;
        this.rma = new Rma([]);
        this.printerId = this.comms.getDefaultPrinter();
    }

    ngOnInit(){
        this.id = parseInt(this.route.snapshot.params['id'], 10).toString();
        this.spin.spinStart('rma');
        this.comms.getRMA(this.id)
            .subscribe(
                rma => this.rma = new Rma(rma),
                err => console.log(err),
                () => this.procRma()
            );
    }

    private procRma(){
        console.log(this.rma)
        this.spin.spinStop('rma');
        if(this.swagCheck()){
            this.columns = this.comms.getSwagColumns();
        }
    }

    private change(event){
        if(event.sku != undefined){
            for(let i in this.rma.items){
                let item = this.rma.items[i];
                if(item._id == event._id){
                    let sku = this.skus(event.description);
                    this.rma.items[i].sku = sku;
                }
            }
        }
    }

    private skus(desc): string{
        let skus = {
            'SWAGWAY X1 - Black': 'HE-SBW-VTK-85370-2',
            'SWAGWAY X1 - Blue': 'HE-SBW-VTK-85370-4',
            'SWAGWAY X1 - Dark Red': 'HE-SBW-VTK-85370-6',
            'SWAGWAY X1 - Gold': 'HE-SBW-VTK-85370-8',
            'SWAGWAY X1 - Green': 'HE-SBW-VTK-85370-3',
            'SWAGWAY X1 - Pink': 'HE-SBW-VTK-85370-7',
            'SWAGWAY X1 - Red': 'HE-SBW-VTK-85370-1',
            'SWAGWAY X1 - White': 'HE-SBW-VTK-85370-5',
        };
        return skus[desc];
    }

    private received(){
        this.spin.spinStart('receive');
        let obj = {
            id: this.id,
            fields: [],
            sku: this.selected.sku,
            header: this.action(),
            location: this.loc(),
            printer: this.printerId,
            voucher: false,
            sn: ''
        }
        obj.fields[0] = 'SKU: '+this.selected.sku;
        obj.fields[1] = 'NS#: '+this.selected.name;
        obj.fields[2] = 'RA#: '+this.id;
        obj.fields[3] = 'Desc: '+this.selected.description;
        obj.fields[4] = 'Name: '+this.rma.name;

        if(this.rma.actionId == '9'){
            obj.fields[5] = 'Charger: '+this.charger;
            obj.voucher = true;
        }
        this.comms.received(obj)
            .subscribe(
                rma => this.spin.spinStop('receive'),
                err => console.log(err),
                () => this.router.navigate(['/receive'])
            );
    }

    private swagCheck(): boolean{
        let bol = false;
        for(let i in this.rma.items){
            let item = this.rma.items[i];
            let index = item.sku.indexOf('HE-SBW-VTK-85370');
            if(index > -1){
                bol = true;
            }
        }
        return bol;
    }

    private select(event){
        this.sel = true;
        this.selected = event;
    }

    private printerChanged(event){
        this.printerId = event.value;
    }

    private loc(): number{
        let id = this.rma.actionId;
        if(id == '9'){
            return 60;
        }else{
            return 48;
        }
    }

    private action(): string{  // action name is to long for labels
        let id = this.rma.actionId;
        if(id == '1'){
            return 'Refund'
        }else if(id == '2'){
            return 'Refund'
        }else if(id == '3'){
            return 'Exchange';
        }else if(id == '5'){
            return 'Repair';
        }else if(id == '6'){
            return 'Refused';
        }else if(id == '8'){
            return 'Free Repair';
        }else if(id == '9'){
            return 'Voucher';
        }else if(id == '10'){
            return 'Battery Swap';
        }else if(id == '11'){
            return 'Advanced';
        }else if(id == '12'){
            return 'Replaced';
        }
    }
}