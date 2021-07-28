import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PrincipalCardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ButtonComponent,
    PrincipalCardComponent,
    TranslateModule
  ]
})
export class SharedModule { }
