import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import{AddserverPage } from '../addserver/addserver';

/**
 * Generated class for the ListmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listmodal',
  templateUrl: 'listmodal.html',
})
export class ListmodalPage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListmodalPage');
  }
  editServerDetails(){
this.navCtrl.push(AddserverPage);
  }
  cancel(){
 this.viewCtrl.dismiss();
  }
}
