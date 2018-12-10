import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServerdetailsPage } from './serverdetails';

@NgModule({
  declarations: [
    ServerdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServerdetailsPage),
  ],
})
export class ServerdetailsPageModule {}
