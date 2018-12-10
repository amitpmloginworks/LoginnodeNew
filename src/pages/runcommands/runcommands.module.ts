import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RuncommandsPage } from './runcommands';

@NgModule({
  declarations: [
    RuncommandsPage,
  ],
  imports: [
    IonicPageModule.forChild(RuncommandsPage),
  ],
})
export class RuncommandsPageModule {}
