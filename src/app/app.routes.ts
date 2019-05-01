import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Charts1Component } from './pages/charts1/charts1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'charts1', component: Charts1Component },        
            { path: '', pathMatch:'full', redirectTo: '/dashboard' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NoPageFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });