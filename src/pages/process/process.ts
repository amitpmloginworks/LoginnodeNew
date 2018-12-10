import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process',
  templateUrl: 'process.html',
})
export class ProcessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessPage');
  }

doClick(){
  document.getElementById("overlay").style.display = "block";
 // document.getElementById("back").style.backgroundColor = "rgba(0,0,0,0.6)";
}

yes(){
  document.getElementById("overlay").style.display = "none";
 // document.getElementById("back").style.backgroundColor = "#000000";
}

no(){
  document.getElementById("overlay").style.display = "none";
 
}
}
