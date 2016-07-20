import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UnoPage } from '../uno/uno';
import { DosPage } from '../dos/dos';
import { TresPage } from '../tres/tres';
import { TabsPage } from '../tabs/tabs';

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
  pages: any[] = [
    {
      title: 'home',
      icon: 'home',
      component: HomePage
    },
    {
      title: 'Uno',
      icon: 'home',
      component: UnoPage
    },
    {
      title: 'Dos',
      icon: 'home',
      component: DosPage
    },
    {
      title: 'Tres',
      icon: 'home',
      component: TabsPage
    }
  ];

  constructor(private nav: NavController) {

  }

  openPage( page:any ){
    this.rootPage = page;
  }

}
