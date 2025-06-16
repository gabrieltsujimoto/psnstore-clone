import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  protected imgUrl:string =''
  constructor(){
    document.getElementById('img1')?.addEventListener('click', (event) =>{
      this.imgUrl = (event.target as HTMLImageElement).src;
      this.changeImgUrl(this.imgUrl);
    })

    if(this.imgUrl === ""){
      this.imgUrl = "https://gmedia.playstation.com/is/image/SIEPDC/COD-BLOPS-6-Season-4-Keyart-01-06jun25$pt?$1200px$"
    }
  }

  changeImgUrl(url: string): void{
    this.imgUrl = url
    return console.log('url recebida:', url)
  }
}
