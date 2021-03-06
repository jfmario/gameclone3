
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../lib/auth.service';

declare var window: any;

@Component ({
    moduleId: module.id,
    selector: 'auth-login',
    templateUrl: '../static/html/logout.component.html'
})
export class LogoutComponent implements DoCheck {

    constructor ( private authService : AuthService, private router: Router ) {}

    ngDoCheck ()
    {

        this.authService.currentUser = null;
        this.authService.setToken ( null );

        window.localStorage.removeItem ( 'jfmToken' );

        this.router.navigate ( [ '/auth' ] );
    }
}
