import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Charts1Component } from './charts1/charts1.component';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Charts1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Charts1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }