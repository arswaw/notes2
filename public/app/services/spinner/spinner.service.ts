import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class SpinnerService {
    private names: Array<string> = [];
    private spin: boolean = false;

    private _spinner = new BehaviorSubject<boolean>(false);
    public spinner = this._spinner.asObservable();

    private sStart(){
        this.spin = true;
        this._spinner.next(true);
    }

    private sStop(){
        this.spin = false;
        this._spinner.next(false);
    }

    private inArr(name: string): boolean{
        let found: boolean = false;
        for(let i in this.names){
            let row = this.names[i];
            if(row == name){
                found = true;
            }
        }
        return found;
    }

    public spinStart(name: string){ // name of component spin spinner
        console.log('start: '+name);
        let running = this.inArr(name);
        if(!running){
            this.names.push(name);
            if(!this.spin){
                this.sStart();
            }
        }
    }

    public spinStop(name: string){
        console.log('stop: '+name);
        let running = this.inArr(name);
        if(running){
            let index = this.names.indexOf(name);
            let cut = this.names.splice(index,1);
            if(this.names.length == 0){
                this.sStop();
            }
        }
    }

    public clearSpin(){
        this.names = [];
        this.sStop();
    }
}