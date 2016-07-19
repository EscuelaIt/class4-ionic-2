import { Component } from '@angular/core';
import { NavController, NavParams, Modal } from 'ionic-angular';
import { UserInterface } from '../../interfaces/user';
import { ModalPage } from '../modal/modal';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
})
export class UsersPage {

  user: UserInterface;

  constructor(
    private navCtrl: NavController,
    private params: NavParams
  ) {
    this.user = this.params.get('user');
  }

  goToBack(){
    this.navCtrl.pop();
  }

  showModal(){
    let modal = Modal.create( ModalPage, {
      id: 1
    } );
    this.navCtrl.present( modal );
    modal.onDismiss(data => {
      console.log( data.age );
    });
  }

}
