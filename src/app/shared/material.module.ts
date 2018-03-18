import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatTableModule, MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule
  ],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
