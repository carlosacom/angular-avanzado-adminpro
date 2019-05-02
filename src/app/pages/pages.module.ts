import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

// plugins
import { ChartsModule } from 'ng2-charts';

// modules
import { SharedModule } from '../shared/shared.module';
// rutas
import { PAGES_ROUTES } from './pages.routes';
// components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Charts1Component } from './charts1/charts1.component';
import { IncrementatorComponent } from '../components/incrementator/incrementator.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Charts1Component,
        IncrementatorComponent,
        DoughnutChartComponent,
        AccountSettingsComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Charts1Component,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }