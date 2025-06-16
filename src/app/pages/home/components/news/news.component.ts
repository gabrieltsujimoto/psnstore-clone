import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  protected imgUrl: string = ''
  constructor() {
    window.addEventListener('scroll', () =>{
      document.body.style.transition = 'colors 400ms'
    })
    document.getElementById('img1')?.addEventListener('click', (event) => {
      this.imgUrl = (event.target as HTMLImageElement).src;
      this.changeImgUrl(this.imgUrl);
    })
    if (this.imgUrl === "") {
      this.imgUrl = "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-6-season-4-hero-desktop-01-en-15may25?$4000px$"
    }
  }

  changeImgUrl(url: string): void {
    this.imgUrl = url
    if (this.imgUrl !== "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-6-season-4-hero-desktop-01-en-15may25?$4000px$") {
      document.getElementById('img_banner__content')!.style.visibility = 'hidden'
    } else {

      document.getElementById('img_banner__content')!.style.visibility = 'visible'
    }
    return console.log('url recebida:', url)
  }
}
