import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/add',
    component: PostFormComponent,
  },
  {
  path: 'posts/:id',
  component: SinglePostComponent,
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
