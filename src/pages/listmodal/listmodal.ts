import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import{EditServerPage } from '../edit-server/edit-server';

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
type:any;
  constructor(public alertCtrl:AlertController, public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  
    this.type=this.navParams.get("type");
   // alert(this.type);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListmodalPage');
  }
  editServerDetails(){
    this.viewCtrl.dismiss();
this.navCtrl.push(EditServerPage);
  }
  cancel(){
 this.viewCtrl.dismiss();
  }

delete(){
//  this.viewCtrl.dismiss();
document.getElementById("delete").style.display="block"
document.getElementById("div-main").style.display="none"

}
  

  yes(){
    document.getElementById("delete").style.display="none"
    this.viewCtrl.dismiss();
  }

  no(){
    document.getElementById("delete").style.display="none"
    this.viewCtrl.dismiss();
  }
}
