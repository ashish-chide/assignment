import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  post: Post = {
    userId: 1,
    id: 1,
    title: "This is Title",
    body: "This is Body of the post"
  };
  id: number;
  commentArray: Comment;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.postService.getPost(this.id).subscribe((Response: any) => {
      this.post = Response;
    });
    this.postService.getComments(this.id).subscribe((Response: any) => {
      this.commentArray = Response.splice(0, 5);
    });
  }
}
