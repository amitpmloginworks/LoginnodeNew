import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { ServerdetailsPage } from '../serverdetails/serverdetails';
import { AddserverPage } from '../addserver/addserver';
import { WelcomePage } from '../welcome/welcome';
import { ListmodalPage } from '../listmodal/listmodal';


/**
 * Generated class for the ServerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-server-list',
  templateUrl: 'server-list.html',
})
export class ServerListPage {

  constructor(public menuCtrl:MenuController,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServerListPage');
  }
  serverDetails(){
    this.navCtrl.push(ServerdetailsPage);
   }
 
   download(){
     this.navCtrl.push(WelcomePage);
   }
   
   addServer(){
 this.navCtrl.push(AddserverPage);
   }

   listModal(){
     let listModalPage=this.modalCtrl.create(ListmodalPage);
     listModalPage.present();
   }


   openMenu(){
    this.menuCtrl.enable(true, 'authenticated');
  }
}
