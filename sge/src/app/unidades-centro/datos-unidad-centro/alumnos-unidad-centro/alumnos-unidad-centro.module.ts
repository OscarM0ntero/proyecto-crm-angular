import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosUnidadCentroComponent } from './alumnos-unidad-centro.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
import { AlumnosUnidadCentroRoutingModule } from './alumnos-unidad-centro-routing.module';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';
import { DeleteAlumnoComponent } from './delete-alumno/delete-alumno.component';

@NgModule({
  declarations: [AlumnosUnidadCentroComponent, AddAlumnoComponent, EditAlumnoComponent, DeleteAlumnoComponent],
  imports: [
    CommonModule,
	AlumnosUnidadCentroRoutingModule,
	CrudMaterialModule
  ]
})
export class AlumnosUnidadCentroModule { }
