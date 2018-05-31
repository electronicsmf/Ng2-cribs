import { BlogInComponent } from './blog-in/blog-in.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes:Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'crib-listing', component: CribListingComponent},
{ path: 'services', component: ServicesComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'blog-in', component: BlogInComponent},
{ path: '**', redirectTo: 'Home', pathMatch: 'full'}

];