import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditServerPage } from './edit-server';

@NgModule({
  declarations: [
    EditServerPage,
  ],
  imports: [
    IonicPageModule.forChild(EditServerPage),
  ],
})
export class EditServerPageModule {}
