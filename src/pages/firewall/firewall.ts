import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { FirewalltypePage } from '../firewalltype/firewalltype';

/**
 * Generated class for the FirewallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firewall',
  templateUrl: 'firewall.html',
})
export class FirewallPage {

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirewallPage');
  }
  updateItem(text){
  
  }

  selectFirewallType(){
    
let firewallTypeModal=this.modal.create("FirewalltypePage");
firewallTypeModal.present();
  }
}
