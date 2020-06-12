import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import localeES from "@angular/common/locales/es";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './login/interceptors/token.interceptor';
import { AuthInterceptor } from './login/interceptors/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";




registerLocaleData(localeES, "es");
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule, HttpClientModule,ButtonModule,ReactiveFormsModule,GMapModule,BrowserAnimationsModule
    
  ],
  providers: [
    //ClienteService,
    { provide: LOCALE_ID, useValue: "es" },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
