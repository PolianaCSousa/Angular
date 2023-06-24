import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  
  userName: string = 'Joaquim';

  userData: {email: string, role: string} = {
    email: 'quinzinho@gmail.com',
    role: 'Admin'
  }

}
