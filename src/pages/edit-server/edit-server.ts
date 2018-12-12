import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ModalController } from 'ionic-angular';
import { UpdatesuccessmodalPage } from '../updatesuccessmodal/updatesuccessmodal';

/**
 * Generated class for the EditServerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-server',
  templateUrl: 'edit-server.html',
})
export class EditServerPage {

  constructor(public modal:ModalController,public alertCtrl:AlertController, public menuCtrl:MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditServerPage');
  }
  openMenu(){
//alert()
    this.menuCtrl.enable(true, 'authenticated');
  }
  updateServer(){
    //this.presentConfirm();

    let successModal=this.modal.create(UpdatesuccessmodalPage);
        successModal.present();
  }

}
