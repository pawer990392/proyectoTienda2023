import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionUserComponent } from './sesion-user/sesion-user.component';
import { MaterialModule } from '../material/material.module';
import { LogoSessionComponent } from './logo-session/logo-session.component';



@NgModule({
  declarations: [
    SesionUserComponent,
    LogoSessionComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SesionUserComponent
  ]
})
export class InicioModule { }
