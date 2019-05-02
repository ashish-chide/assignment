import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  postsArray: Post[] = [];
  @Output() eventClicked = new EventEmitter<Post>();

  constructor(private postServices: PostService) {}

  ngOnInit() {
    this.postServices.getPosts().subscribe(
      (Response: Post[]) => {
        this.postsArray = Response.splice(0, 4);
      },
      error => console.log(error)
    );
  }

  onClick(post: Post): void {
    this.eventClicked.emit(post);
  }
}
