import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { WelcomePage } from '../pages/welcome/welcome';
import { AddserverPage } from '../pages/addserver/addserver';
import { ServerdetailsPage } from '../pages/serverdetails/serverdetails';
import { FirewallPage } from '../pages/firewall/firewall';
import { FirewalltypePage } from '../pages/firewalltype/firewalltype';
import { ServerListPage } from '../pages/server-list/server-list';
import { ServicesPage } from '../pages/services/services'
import { ProcessPage } from '../pages/process/process'
import {ListmodalPage} from '../pages/listmodal/listmodal'
import {BatchfilePage} from '../pages/batchfile/batchfile';
import {NewbatchfilePage} from '../pages/newbatchfile/newbatchfile';
import {SplashPage} from '../pages/splash/splash';
import {RuncommandsPage} from '../pages/runcommands/runcommands';
import { DomainstatusPage} from '../pages/domainstatus/domainstatus';
import { SchedulecommandsPage} from '../pages/schedulecommands/schedulecommands';
import { CommandslistPage } from '../pages/commandslist/commandslist';
import { HelpPage } from '../pages/help/help';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    FirewallPage,
    AddserverPage,
    ServerdetailsPage,
    ServicesPage,
    ProcessPage,
    ServerListPage,
    ListmodalPage,
    BatchfilePage,
    NewbatchfilePage,
    SplashPage,
    RuncommandsPage,
    DomainstatusPage,
    SchedulecommandsPage,
    CommandslistPage,
    HelpPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    FirewallPage,
    AddserverPage,
    ServerdetailsPage,
    ServerListPage,
    ServicesPage,
    ProcessPage,
    ListmodalPage,
    BatchfilePage,
    NewbatchfilePage,
    SplashPage,
    RuncommandsPage,
    DomainstatusPage,
    SchedulecommandsPage,
    CommandslistPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
