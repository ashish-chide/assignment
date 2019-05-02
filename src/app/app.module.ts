import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./post.service";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    NewPostComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
