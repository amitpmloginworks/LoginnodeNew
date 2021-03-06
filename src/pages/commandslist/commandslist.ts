import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DeletecommandmodalPage } from '../deletecommandmodal/deletecommandmodal'

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
  
       let deleteModal=this.modal.create(DeletecommandmodalPage);
       deleteModal.present();
  }
}
