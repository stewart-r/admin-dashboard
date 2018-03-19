import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatTableModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
