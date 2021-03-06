import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstApp';

  showMovie: boolean;

  displayList() {
    this.showMovie = !this.showMovie;
  }
}

export class Order {
  pseudo: string;
  email: string;
}
