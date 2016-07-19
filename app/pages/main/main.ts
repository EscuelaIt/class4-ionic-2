import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnoPage } from '../uno/uno';
import { DosPage } from '../dos/dos';
import { TresPage } from '../tres/tres';
import { CuatroPage } from '../cuatro/cuatro';
import { CincoPage } from '../cinco/cinco';


@Component({
  templateUrl: 'build/pages/main/main.html'
})
export class MainPage {

  tab1Root;
  tab2Root;
  tab3Root;
  tab4Root;
  tab5Root;

  constructor(private nav: NavController) {
    // set the root pages for each tab
    this.tab1Root = UnoPage;
    this.tab2Root = DosPage;
    this.tab3Root = TresPage;
    this.tab4Root = CuatroPage;
    this.tab5Root = CincoPage;
    
  }
}
