import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UnoPage } from '../uno/uno';
import { DosPage } from '../dos/dos';
import { TresPage } from '../tres/tres';

/*
  Generated class for the MenuPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {

  rootPage: any = HomePage;

  constructor(private nav: NavController) {

  }

  homePage(){
    this.rootPage = HomePage;
  }
  
  unoPage(){
    this.rootPage = UnoPage;
  }

  dosPage(){
    this.rootPage = DosPage;
  }

  tresPage(){
    this.rootPage = TresPage;
  }

}
