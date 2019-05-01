import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { appRouting } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Charts1Component } from './pages/charts1/charts1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    Charts1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
