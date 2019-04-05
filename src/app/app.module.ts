import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HighLightDirective } from './high-light.directive';
import { DisplayListDirective } from './display-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    HighLightDirective,
    DisplayListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
