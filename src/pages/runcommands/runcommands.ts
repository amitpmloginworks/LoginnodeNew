import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchedulecommandsPage} from '../schedulecommands/schedulecommands';
import { HelpPage } from '../help/help';

/**
 * Generated class for the RuncommandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-runcommands',
  templateUrl: 'runcommands.html',
})
export class RuncommandsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuncommandsPage');
  }

clearLog(){
 console.log("clear log"); 
}
scheduleCommands(){
  this.navCtrl.push(SchedulecommandsPage);
}

help(){
this.navCtrl.push(HelpPage);
}

}
