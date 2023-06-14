import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-ecommerce';
  sliderURL = '../assets/imgs/bgIMG.png';

  ngOnInit(): void {
    console.log('a1');
  }
}
