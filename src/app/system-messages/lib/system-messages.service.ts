
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SystemMessage } from '../models/system-message.model';

@Injectable()
export class SystemMessagesService {

    private baseUrl =
        'http://ec2-54-191-90-8.us-west-2.compute.amazonaws.com/global/messages';

    public lastMessage: SystemMessage = null;
    public messages: SystemMessage [] = [];

    constructor ( private http: Http ) {}

    private handleError ( error: any ) {
        console.error ( 'An error occurred', error );
    }

    public getMessages ()
    {
        var self = this;
        let headers = new Headers ({
            'Content-Type': 'application/json'
        });
        return this.http.get ( this.baseUrl, { headers: headers } )
            .toPromise ().then ( function ( response )
            {
                self.messages = response.json () as SystemMessage [];
                return self.messages;
            })
            .catch ( this.handleError );
    }
    public getMessage ( messageName: String )
    {
        var self = this;
        let headers = new Headers ({
            'Content-Type': 'application/json'
        });
        return this.http.get ( this.baseUrl + '/' + messageName,
            { headers: headers } )
            .toPromise ().then ( function ( response )
            {
                self.lastMessage = response.json () as SystemMessage;
                return self.lastMessage;
            })
            .catch ( this.handleError );
    }
}
