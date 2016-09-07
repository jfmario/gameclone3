
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckAbstractComponent } from '../';
import { AuthService } from '../lib/auth.service';
import { SystemMessagesComponent } from
    '../../system-messages/components/system-messages.component';

@Component ({
    directives: [SystemMessagesComponent],
    moduleId: module.id,
    selector: 'auth-landing',
    templateUrl: '../static/html/landing.component.html'
})
export class LandingComponent extends AuthCheckAbstractComponent
    implements DoCheck {

    public currentUser: String = null;

    constructor ( protected authService: AuthService, protected router: Router )
    {
        super ( authService, router );
    }

    ngDoCheck ()
    {
        this.currentUser = this.authService.currentUser;
    }
}
