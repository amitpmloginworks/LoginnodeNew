import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ CommandslistPage } from '../commandslist/commandslist';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { HelpPage} from '../help/help'
/**
 * Generated class for the SchedulecommandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedulecommands',
  templateUrl: 'schedulecommands.html',
})
export class SchedulecommandsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulecommandsPage');
  }
  
  commandsList(){
    this.navCtrl.push(CommandslistPage);
  }

  help(){
    this.navCtrl.push(HelpPage);
  }
}
