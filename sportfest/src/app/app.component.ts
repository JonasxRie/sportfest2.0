import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerImage = '/assets/images/tribune2.png';
  atiwImage = '/assets/images/ATIW-BK 2016.jpg';
  title = 'Sportfest';
  year = '2017';
  asdf = 42;
  sadf: number;
  
  public abd(){
    let as: string;
    return 13;
  }
}
