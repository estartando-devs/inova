import { Component, OnInit } from '@angular/core';
import { LANG } from '../../theme/lang-pt';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public Lang = LANG;

  constructor() { }

  ngOnInit() {
    
  }

  isHome(route){
    if(route.toLowerCase() == "home"){
      return ""
    }
    return route
  }

  public openMenu() {
    let menu = document.getElementById("go").style.width;
    if(menu == "0px" || menu == ""){
      document.getElementById("go").style.width = "100%";
    }else{
      document.getElementById("go").style.width = "0px";      
    }
  }
  
}
