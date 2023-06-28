import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { MaterialModule } from '../material/material.module';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorEditComponent } from './proveedor-edit/proveedor-edit.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';


@NgModule({
  declarations: [
    ProveedorCreateComponent,
    ProveedorListComponent,
    ProveedorEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProveedorRoutingModule
  ],
  exports:[
    ProveedorCreateComponent
  ]
})
export class ProveedorModule { }
