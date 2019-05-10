import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const ROUTES: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full'},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'search-movie', component: SearchMovieComponent }
];

export { ROUTES };
