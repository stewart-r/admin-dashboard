import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatTableModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule { }
