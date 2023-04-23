import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutsModule { }
