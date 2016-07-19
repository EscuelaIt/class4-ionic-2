import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tab2Page } from '../tab-2/tab-2';
import { Tab3Page } from '../tab-3/tab-3';

/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = Tab2Page;
  tab3 = Tab3Page;

  constructor(private nav: NavController) {

  }

}
