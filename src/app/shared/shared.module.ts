import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ButtonComponent,
    TranslateModule
  ]
})
export class SharedModule { }
