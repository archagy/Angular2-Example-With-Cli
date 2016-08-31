import { provideRouter, RouterConfig } from '@angular/router';
import {WelcomeComponent } from './welcome/welcome.component' 

export const routes: RouterConfig = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent}
];

export const appRoutingProviders: any[] = [

];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];