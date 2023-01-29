import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalMessageComponent } from 'src/app/compenents/message/global-message/global-message.component';

@NgModule({
  declarations: [
    GlobalMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    GlobalMessageComponent
  ]
})
export class SharedModule { }
