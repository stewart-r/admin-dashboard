import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'blog-dashboard', component: BlogListComponent }
    ])
  ],
  declarations: [ BlogListComponent ]
})
export class BlogDashboardModule { }
