import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  goToUsersPage(){
    let user = {
      id: 1,
      name: 'nicolas',
      lastname: 'molina'
    }
    this.navCtrl.push( UsersPage, {
      user: user,
    });
  }

  goToUsersPageRoot(){
    let user = {
      id: 1,
      name: 'nicolas',
      lastname: 'molina'
    }
    this.navCtrl.setRoot( UsersPage, {
      user: user,
    });
  }


}
