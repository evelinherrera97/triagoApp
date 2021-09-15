import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { StepSmsComponent } from './components/step-sms/step-sms.component';


@NgModule({
  declarations: [
    RegisterComponent,
    StepSmsComponent

  ],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
