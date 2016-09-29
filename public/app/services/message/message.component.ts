import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MessageService} from './message.service';
//models
import {Msg} from '../../models/msg/msg';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: 'message.component.html',
})
export class MessageComponent{
    private msgs: Array<Msg>;

    constructor(private message: MessageService){
        this.msgs = message.msgs;
    }

    private closeMsg(msg: Msg){
        this.message.removeMsg(msg.id);
    }
}