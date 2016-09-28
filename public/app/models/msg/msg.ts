// msg = message
import {GuidService} from '../../services/guid/guid.service';

export class Msg {
    public title: string;
    public body: string;
    public type: string;
    public id: string;
    constructor(options:{
        title: string,
        body: string,
        type: string
    }){

        this.title = options.title;
        this.body = options.body;
        this.id = new GuidService().toString();
        if(options.type == 'good'){
            this.type = 'good';
        }else if(options.type == 'bad'){
            this.type = 'bad';
        }else if(options.type == 'warning'){
            this.type = 'warn';
        }else if(options.type == 'info'){
            this.type = 'info';
        }else{
            this.type = 'bad';
            this.title += ' - type error';
            this.body += '\n - incorrect message type'
        }
    }
}