import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BirthdayPipe} from '../birthday.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[BirthdayPipe],
  declarations: [BirthdayPipe]
})
export class PipeModule { }
