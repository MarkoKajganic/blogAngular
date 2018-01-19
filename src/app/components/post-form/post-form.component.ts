import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts.model'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {

  private newPost: Posts = new Posts();

  _postService: PostService;

  constructor(_postService: PostService) { 
    this._postService = _postService;
  }




  submit(newPost)
  {
    this._postService.addPost(newPost);
  }




  ngOnInit() {
  }

}
