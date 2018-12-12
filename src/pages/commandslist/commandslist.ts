import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListmodalPage } from '../listmodal/listmodal'

/**
 * Generated class for the CommandslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commandslist',
  templateUrl: 'commandslist.html',
})
export class CommandslistPage {

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandslistPage');
  }

  deleteCommands(){
      //this.navCtrl.push(ListmodalPage)
    //  alert()
      let deleteModal=this.modal.create(ListmodalPage, {type:0});
      deleteModal.present();
  }
}
