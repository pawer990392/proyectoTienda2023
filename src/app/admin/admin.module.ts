import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    LayoutComponent

  ]
})
export class AdminModule { }
