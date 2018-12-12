import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomainstatusPage } from '../domainstatus/domainstatus';

/**
 * Generated class for the DomainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-domain',
  templateUrl: 'domain.html',
})
export class DomainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomainPage');
  }
  checkDomainStatus(){
    this.navCtrl.push(DomainstatusPage);
  }
}
