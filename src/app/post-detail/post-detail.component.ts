import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  commentArray: Comment;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getComments(this.post.id).subscribe((Response: any) => {
      this.commentArray = Response.splice(0, 5);
    });
  }
}
