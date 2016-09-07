
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    public LOGGER_LEVELS: any = {
        ERROR: 1,
        WARN: 2,
        DEBUG: 3,
        INFO: 4,
        LOG: 5,
        TRACE: 6
    };
    public loggerLevel: number = 6;

    constructor () {}

    private _log ( level: String, caller: String, message: String )
    {
        console.log ( '(' + caller + ') [' + level + '] ' + message );
    }

    error ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 1 )
            this._log ( "ERROR", caller, message );
    }
    warn ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 2 )
            this._log ( "WARN", caller, message );
    }
    debug ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 3 )
            this._log ( "DEBUG", caller, message );
    }
    info ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 4 )
            this._log ( "INFO", caller, message );
    }
    log ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 5 )
            this._log ( "LOG", caller, message );
    }
    trace ( caller: String, message: String )
    {
        if ( this.loggerLevel >= 6 )
            this._log ( "TRACE", caller, message );
    }
};
