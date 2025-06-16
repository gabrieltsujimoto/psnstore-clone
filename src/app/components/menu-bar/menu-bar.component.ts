import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  constructor(){
    window.addEventListener('scroll',function (){
      const navbar = document.getElementById('nav-wrapper');

      if(window.scrollY > navbar!.scrollHeight.valueOf() ){
        console.log('adding style')
        navbar!.style.position = 'fixed' 

        navbar!.style.top = '0px'
        navbar!.style.width = '100%'
        navbar!.style.backgroundColor = "white"
        navbar!.style.transition = 'all 700ms'
      } else if(window.scrollY < 80){
         navbar!.style.position = 'relative'
         navbar!.style.transition = 'all 700ms'
      }
    })
  }

}
