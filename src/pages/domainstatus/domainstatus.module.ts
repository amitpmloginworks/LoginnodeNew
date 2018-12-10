import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainstatusPage } from './domainstatus';

@NgModule({
  declarations: [
    DomainstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(DomainstatusPage),
  ],
})
export class DomainstatusPageModule {}
