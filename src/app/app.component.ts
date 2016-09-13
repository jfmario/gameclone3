
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoggerService } from './shared/';

@Component({
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id,
    providers: [LoggerService],
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    games = GAMES;

    constructor ( private logger: LoggerService )
    {
        this.logger.loggerLevel = this.logger.LOGGER_LEVELS.TRACE;
        this.logger.trace ( "AppComponent", "constructor ()" );
    }
}
