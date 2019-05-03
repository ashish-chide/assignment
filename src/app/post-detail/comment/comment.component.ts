import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/post.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  commentArray: Comment;
  @Input() id: number;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getComments(this.id).subscribe((Response: any) => {
      this.commentArray = Response.splice(0, 5);
    });
  }
}
