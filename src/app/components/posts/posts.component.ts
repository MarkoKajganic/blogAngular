import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private _postsService: PostService) {
    this.posts = _postsService.getPosts();
    console.log(this.posts);
   }

  ngOnInit() {
  }

}
