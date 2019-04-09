import { Component, OnInit } from '@angular/core';
import { Email } from '../inputEmail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'emailRenseignéDansInput';
  email: Email = {
    type: 'email',
    name: 'osf@hotmail.fr'
  };

  constructor() { }

  ngOnInit() {
  }

}
