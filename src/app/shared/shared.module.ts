import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';
import { StepComponent } from './components/step/step.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PrincipalCardComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ButtonComponent,
    PrincipalCardComponent,
    TranslateModule,
    StepComponent
  ]
})
export class SharedModule { }
