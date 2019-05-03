import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./post.service";
import { HeaderComponent } from "./header/header.component";
import { EditPostComponent } from './edit-post/edit-post.component';
import { CommentComponent } from './post-detail/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    NewPostComponent,
    HeaderComponent,
    EditPostComponent,
    CommentComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
