import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdatesuccessmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatesuccessmodal',
  templateUrl: 'updatesuccessmodal.html',
})
export class UpdatesuccessmodalPage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatesuccessmodalPage');
  }
  ok(){
    this.viewCtrl.dismiss();
  }
}
