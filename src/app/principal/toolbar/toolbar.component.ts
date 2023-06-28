import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }

  //https://stackblitz.com/edit/angular-material-dashboard-setup?file=src%2Fapp%2Flayout%2Fheader.component.ts
  //https://www.youtube.com/watch?v=miAcR0rgHY4&t=2956s
  
}
