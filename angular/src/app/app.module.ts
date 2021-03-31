import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
//ng generate module app-routing --flat --module=app   -- to create route..
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SiteAndPostComponent } from './site-and-post/site-and-post.component';
import { LoginComponent } from './login/login.component';
import { PowerPipe } from './power.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    SiteAndPostComponent,
    LoginComponent,
    PowerPipe,
    FilterPipe,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
