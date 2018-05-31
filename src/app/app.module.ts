import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { appRoutes } from './routes';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BlogInComponent } from './blog-in/blog-in.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './service/cribs.service'; 
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BlogInComponent,
    CribCardComponent,
    AddListingFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
