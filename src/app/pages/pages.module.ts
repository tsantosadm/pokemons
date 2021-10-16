import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Roouting
import { RoutingModule } from './home/routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }
