import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DeletecommandmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deletecommandmodal',
  templateUrl: 'deletecommandmodal.html',
})
export class DeletecommandmodalPage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletecommandmodalPage');
  }

  ok(){
   this.viewCtrl.dismiss();
  }

  yes(){
    document.getElementById("delete").style.display="none";
    document.getElementById("success").style.display="block";
    document.getElementById("div-main").style.display="none";
  }
  no(){
    this.viewCtrl.dismiss();
  }

  delete(){
    document.getElementById("delete").style.display="block";
    document.getElementById("success").style.display="none";
    document.getElementById("div-main").style.display="none";
  }
  edit(){
    
  }
}
