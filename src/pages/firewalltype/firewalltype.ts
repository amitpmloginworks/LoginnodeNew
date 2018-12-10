import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';




/**
 * Generated class for the FirewalltypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firewalltype',
  templateUrl: 'firewalltype.html',
})
export class FirewalltypePage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirewalltypePage');
  }

ok(){
this.viewCtrl.dismiss()
}

cancel(){
  this.viewCtrl.dismiss()
}

}
