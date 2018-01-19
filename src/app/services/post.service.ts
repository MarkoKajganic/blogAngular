import { Injectable } from '@angular/core';
import { Posts } from '../models/posts.model'

@Injectable()
export class PostService {

  private posts = [];
  private idCount = 4;

  constructor()
  {
    this.posts = [
      {
        id: 1,
        title: 'Naslov1',
        text: 'dummy text dummy text dummy text dummy text',
        created_at: '01-01-2018'
      },
      {
        id: 2,
        title: 'Naslov2',
        text: 'dummy 2 text 2 dummy 2 text 2 dummy 2 text 2 dummy 2 text',
        created_at: '01-01-2018'
      },
      {
        id: 3,
        title: 'Naslov3',
        text: 'dummy 3 text 3 dummy 3 text 3 dummy 3 text 3 dummy 3 text',
        created_at: '01-01-2018'
      },
    ]
  }

  public getPosts()
  {
    return this.posts;
  }

  public addPost(newPost)
  {
    this.posts.push(new Posts(
      this.idCount,
      newPost.title,
      newPost.text,
      newPost.created_at
    ));
    this.idCount++;
  }

}
