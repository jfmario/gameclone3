
import { Component, DoCheck, Input } from '@angular/core';
import { SystemMessagesService } from '../../lib/system-messages.service';
import { SystemMessage } from '../../models/system-message.model';

@Component({
    moduleId: module.id,
    selector: 'sub-system-messages-single-message',
    templateUrl: '../../static/html/sub/single-message.subcomponent.html'
})
export class SingleMessageSubcomponent {

    @Input()
    public message: SystemMessage;

    constructor ( private systemMessagesService: SystemMessagesService ) {}
}
