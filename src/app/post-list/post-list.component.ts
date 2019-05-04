import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  page: number = 1;
  postsArray: Post[] = [
    {
      userId: 1,
      id: 1,
      title: "This is Title",
      body: "This is Body of the post"
    }
  ];

  constructor(private postServices: PostService) {}

  ngOnInit() {
    this.postServices.getAllPosts().subscribe(
      (Response: Post[]) => {
        this.postsArray = Response;
      },
      error => console.log(error)
    );
  }
}
