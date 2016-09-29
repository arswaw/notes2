import {Msg} from '../../models/msg/msg';

export class MessageService{

    public msgs: Array<Msg> = [];

    public addMsg(msg: Msg){
        this.msgs.push(msg);
    }

    public removeMsg(id: string){
        for(let i in this.msgs){
            let msg = this.msgs[i];
            if(msg.id == id){
                this.msgs.splice(parseInt(i, 10), 1);
            }
        }
    }
}