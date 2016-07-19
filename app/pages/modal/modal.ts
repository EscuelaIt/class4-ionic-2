import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {

  constructor(
    private viewCtrl: ViewController,
    private params: NavParams
  ) {
    let id = this.params.get('id');
    console.log(id);
  }

  close(){
    this.viewCtrl.dismiss({
      age: 22
    });
  }

}
