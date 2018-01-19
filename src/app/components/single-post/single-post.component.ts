import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Posts } from '../../models/posts.model'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  private post: Posts;

  constructor(private route: ActivatedRoute, private _postsService: PostService) {
    this._postsService = _postsService;
   }

  ngOnInit() {
    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.post = this._postsService.getPosts()
        .find((data: Posts) => {
          return data.id === id;
        });
    });
  }

}
