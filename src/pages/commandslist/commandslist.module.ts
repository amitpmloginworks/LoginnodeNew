import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommandslistPage } from './commandslist';

@NgModule({
  declarations: [
    CommandslistPage,
  ],
  imports: [
    IonicPageModule.forChild(CommandslistPage),
  ],
})
export class CommandslistPageModule {}
