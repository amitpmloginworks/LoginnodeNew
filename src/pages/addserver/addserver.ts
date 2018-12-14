import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServerdetailsPage } from '../serverdetails/serverdetails';
import { ServerListPage } from '../server-list/server-list';

/**
 * Generated class for the AddserverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addserver',
  templateUrl: 'addserver.html',
})
export class AddserverPage {

  constructor(public menuCtrl:MenuController, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddserverPage');
  }

  addServer(){
    this.navCtrl.push(ServerListPage);
  }


  openMenu(){
    this.menuCtrl.enable(true, 'authenticated');
  }

}
