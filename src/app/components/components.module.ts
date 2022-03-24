import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HComponent} from './h/h.component';
import {FComponent} from './f/f.component';


@NgModule({
  declarations: [HComponent, FComponent],
  imports: [
    CommonModule
  ],
  exports: [HComponent, FComponent]
})
export class ComponentsModule { }
