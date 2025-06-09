import { Component } from '@angular/core';
import { NewsComponent } from "./components/news/news.component";

@Component({
  selector: 'app-home',
  imports: [NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
