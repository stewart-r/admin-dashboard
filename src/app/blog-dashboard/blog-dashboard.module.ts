import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogsService } from './blogs.service';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: BlogDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ BlogListComponent, BlogDashboardComponent, SidenavComponent ],
  providers: [BlogsService]
})
export class BlogDashboardModule { }
