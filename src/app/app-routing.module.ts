import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-dashboard/blog-list/blog-list.component';

const routes: Routes = [
    { path: 'blog-dashboard', loadChildren: './blog-dashboard/blog-dashboard.module#BlogDashboardModule' },
    { path: '**', redirectTo: 'blog-dashboard' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
