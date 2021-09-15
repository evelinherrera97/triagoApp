import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';
import { PinFieldComponent } from './components/pin-field/pin-field.component';
import { StepComponent } from './components/step/step.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    PrincipalCardComponent,
    PinFieldComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    PrincipalCardComponent,
    PinFieldComponent,
    StepComponent,
    TranslateModule
  ]
})
export class SharedModule { }
