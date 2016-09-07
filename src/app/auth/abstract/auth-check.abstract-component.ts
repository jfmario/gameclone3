
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../';

declare var window: any;

/**
 * Abstract class uses ngOnInit to demand actively logged in user.
 */
export class AuthCheckAbstractComponent implements OnInit {

    public currentUser: String = null;

    constructor ( protected authService : AuthService, protected router: Router ) {}

    ngOnInit ()
    {
        if ( !this.authService.currentUser &&
            !window.localStorage.getItem ( 'jfmToken' ) )
        {
            let link = ['/auth'];
            this.router.navigate ( link );
        }
        else if ( window.localStorage.getItem ( 'jfmToken' ) )
        {
            var self = this;
            this.authService.setToken (
                window.localStorage.getItem ( 'jfmToken' ) );
            this.authService.checkUser ()
                .then ( function ()
            {
                if ( !self.authService.currentUser )
                    self.router.navigate ( ['/auth'] );
            })
        }
        else this.currentUser = this.authService.currentUser;
    }
}
