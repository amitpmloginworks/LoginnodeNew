import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddserverPage } from './addserver';

@NgModule({
  declarations: [
    AddserverPage,
  ],
  imports: [
    IonicPageModule.forChild(AddserverPage),
  ],
})
export class AddserverPageModule {}
