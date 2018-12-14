import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { AddserverPage } from '../pages/addserver/addserver';
import { ServerdetailsPage } from '../pages/serverdetails/serverdetails';
import { FirewallPage } from '../pages/firewall/firewall';
import { FirewalltypePage } from '../pages/firewalltype/firewalltype';
import { ServerListPage } from '../pages/server-list/server-list';
import { ServicesPage } from '../pages/services/services';
import { ProcessPage } from '../pages/process/process';
import { ListmodalPage } from '../pages/listmodal/listmodal';
import { BatchfilePage } from '../pages/batchfile/batchfile';
import { NewbatchfilePage } from '../pages/newbatchfile/newbatchfile';
import { SplashPage } from '../pages/splash/splash';
import { RuncommandsPage } from '../pages/runcommands/runcommands';
import { DomainstatusPage } from '../pages/domainstatus/domainstatus';
import { SchedulecommandsPage } from '../pages/schedulecommands/schedulecommands';
import { CommandslistPage } from '../pages/commandslist/commandslist'
import { HelpPage } from '../pages/help/help';
import { EditServerPage } from '../pages/edit-server/edit-server';
import { UpdatesuccessmodalPage  } from '../pages/updatesuccessmodal/updatesuccessmodal';
import { PerformancePage  } from '../pages/performance/performance';
import {DomainPage } from '../pages/domain/domain'



@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = SplashPage;
  constructor(public modalCtrl:ModalController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //let splash=modalCtrl.create(SplashPage);
     // splash.present();
    });
  }
}