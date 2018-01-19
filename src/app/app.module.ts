import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PostsComponent,
    SinglePostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
