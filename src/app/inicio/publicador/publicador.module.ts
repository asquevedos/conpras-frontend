import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicadorRoutingModule} from './publicador-routing.module';
import { IniciopublicadorComponent } from './iniciopublicador/iniciopublicador.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {SplitButtonModule} from 'primeng/splitbutton';

import {TabMenuModule} from 'primeng/tabmenu';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { MessageModule } from 'primeng/message';
import { MisnegociosComponent } from './misnegocios/misnegocios.component';
import {ToolbarModule} from 'primeng/toolbar';







@NgModule({
  declarations: [    
  IniciopublicadorComponent, MisnegociosComponent,
  ],
  imports: [
    CommonModule,
    PublicadorRoutingModule,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule ,
    TabMenuModule,
    CodeHighlighterModule,
    MessageModule ,
    ToolbarModule
    
    
    
  ], 
  
  
})
export class PublicadorModule { }