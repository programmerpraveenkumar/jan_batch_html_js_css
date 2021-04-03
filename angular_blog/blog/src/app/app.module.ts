import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneBlogComponent } from './one-blog/one-blog.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HttpClientModule } from '@angular/common/http';
import { InfscrollComponent } from './infscroll/infscroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AnimationsampleComponent } from './animationsample/animationsample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyframeanimationComponent } from './keyframeanimation/keyframeanimation.component';
import { TesttestComponent } from './testtest/testtest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneBlogComponent,
    CreatePostComponent,
    InfscrollComponent,
    AnimationsampleComponent,
    KeyframeanimationComponent,
    TesttestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
