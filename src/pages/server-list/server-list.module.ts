import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServerListPage } from './server-list';

@NgModule({
  declarations: [
    ServerListPage,
  ],
  imports: [
    IonicPageModule.forChild(ServerListPage),
  ],
})
export class ServerListPageModule {}
