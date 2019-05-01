import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { appRouting } from './app.routes';

// modules
import { PagesModule } from './pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
