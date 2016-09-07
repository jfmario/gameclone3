
import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './';
import { AuthComponent, LandingComponent, LoginComponent, LogoutComponent,
     RegisterComponent }
    from './auth';

const routes: RouterConfig = [
    {
        component: LandingComponent,
        path: ''
    },
    // main application where logins will by default be redirected
    {
        component: LandingComponent,
        path: 'main'
    },
    // authentication
    {
        component: AuthComponent,
        path: 'auth'
    },
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: LogoutComponent,
        path: 'logout'
    },
    {
        component: RegisterComponent,
        path: 'register'
    }
];

export const appRouterProviders = [
    provideRouter ( routes )
];
