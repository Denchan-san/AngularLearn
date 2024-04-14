import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title : 'Angular Core Deep Dive'
  };

  onLogoClicked() {
      alert('Hello World!');
  }

  onKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }
}
