import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [
    MatFormFieldModule,
    MatTableModule
  ]
})
export class MaterialModule { }
