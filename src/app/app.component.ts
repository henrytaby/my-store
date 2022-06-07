import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Henry Taby';
  age = 42;
  img = "https://pbs.twimg.com/profile_images/505039074529275907/r3aPsQOK_400x400.png";
  btnDisabled = true;
  person = {
    name: 'Henry Taby',
    age: 42,
    avatar: 'https://pbs.twimg.com/profile_images/505039074529275907/r3aPsQOK_400x400.png'
  };


  toglleButton(){
    this.btnDisabled  = !this.btnDisabled;
  };

  increaseAge(){
    this.person.age +=1;

  }
}
