
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from './auth/';
import { LoggerService } from './shared/';
import { SystemMessagesService } from './system-messages/lib/system-messages.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id,
    providers: [ AuthService, LoggerService, SystemMessagesService ],
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor ( private logger: LoggerService,
        private systemMessagesService: SystemMessagesService )
    {
        this.logger.loggerLevel = this.logger.LOGGER_LEVELS.TRACE;
        this.logger.trace ( "AppComponent", "constructor ()" );
        this.systemMessagesService.getMessages ();
    }
}
