import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Charts1Component } from './charts1/charts1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
            { path: 'charts1', component: Charts1Component, data: { title: 'Gráficas' } },
            { path: 'promises', component: PromisesComponent, data: { title: 'Promises' } },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes del Tema' } },        
            { path: '', pathMatch:'full', redirectTo: '/dashboard' },
        ]
    },
];

export const  PAGES_ROUTES = RouterModule.forChild(pageRoutes);