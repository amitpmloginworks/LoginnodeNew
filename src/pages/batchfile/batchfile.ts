import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {NewbatchfilePage} from '../newbatchfile/newbatchfile'

/**
 * Generated class for the BatchfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batchfile',
  templateUrl: 'batchfile.html',
})
export class BatchfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchfilePage');
  }


  addBatchFile(){
   this.navCtrl.push(NewbatchfilePage);
  }
}
