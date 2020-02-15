import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './components/authService/auth.service';
import { EventService } from './components/authService/event.service';
import { RegGuard } from './components/authService/reg.guard';
import { TokenInterceptorService } from './components/authService/token-interceptor.service';
import { Header2Component } from './components/header2/header2.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    HeaderComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, RegGuard,  EventService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
