import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { FirewallPage } from '../firewall/firewall';
import { ServicesPage } from '../services/services';
//import { ServerlistPage } from '../serverlist/Serverlist';
import { ProcessPage } from '../process/process';
import { BatchfilePage } from '../batchfile/batchfile';
import { RuncommandsPage } from '../runcommands/runcommands';
import { DomainPage } from '../domain/domain';
import{ PerformancePage } from '../performance/performance';

/**
 * Generated class for the ServerdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serverdetails',
  templateUrl: 'serverdetails.html',
})
export class ServerdetailsPage {

  constructor(public menuCtrl:MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServerdetailsPage');
  }

  navigateToFirewall(){
    this.navCtrl.push(FirewallPage);
  }

  getServices(){
    this.navCtrl.push(ServicesPage);
  }

//   serverList(){
//  this.navCtrl.push(ServerlistPage);
//   }

getProcess(){
  this.navCtrl.push(ProcessPage);
}
openMenu(){
  this.menuCtrl.enable(true, 'authenticated');
}

batchFile(){
this.navCtrl.push(BatchfilePage);
}

runCommands(){
  this.navCtrl.push(RuncommandsPage);
}

domainStatus(){
  this.navCtrl.push(DomainPage);
}
getPerformance(){
  this.navCtrl.push(PerformancePage);
}
}
