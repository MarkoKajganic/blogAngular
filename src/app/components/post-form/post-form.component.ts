import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts.model'
import { PostService } from '../../services/post.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {

  private newPost: Posts = new Posts();

  _postService: PostService;

  constructor(_postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {

    this._postService = _postService;
  }




  submit(newPost)
  {
    this._postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }




  ngOnInit() {
  }

}
