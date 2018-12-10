import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatchfilePage } from './batchfile';

@NgModule({
  declarations: [
    BatchfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BatchfilePage),
  ],
})
export class BatchfilePageModule {}
