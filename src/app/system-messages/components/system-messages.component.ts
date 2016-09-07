
import { Component, DoCheck, Input } from '@angular/core';
import { SingleMessageSubcomponent } from './sub/single-message.subcomponent';
import { SystemMessagesService } from '../lib/system-messages.service';
import { SystemMessage } from '../models/system-message.model';

@Component({
    directives: [SingleMessageSubcomponent],
    moduleId: module.id,
    selector: 'system-messages-system-messages',
    templateUrl: '../static/html/system-messages.component.html'
})
export class SystemMessagesComponent implements DoCheck {

    public messages: SystemMessage [] = [];

    constructor ( private systemMessagesService: SystemMessagesService ) {}

    ngDoCheck ()
    {
        this.messages = this.systemMessagesService.messages;
    }
}
