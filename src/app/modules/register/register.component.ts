import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public stepOne = true;
  public stepTwo = false;
  public stepThree = false;

  registerFormStepOne = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    birthDate: ['', Validators.required],
  })
  registerFormStepTwo = this.fb.group({
    typeDoc: ['', Validators.required],
    document: ['', Validators.required],
    password: ['', Validators.required],
    documentType: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  })
  registerFormStepThree = this.fb.group({
    emergencyContactName: ['', Validators.required],
    emergencyContact: ['', Validators.required],
    country: ['', Validators.required],
  })


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}

  onSubmitStepOne() {
    if (this.registerFormStepOne.valid) {
      this.stepTwo = true;
      this.stepOne = false
    }
    
  }
  onSubmitStepTwo () {
    if (this.registerFormStepTwo.valid) {
      this.stepTwo = false;
      this.stepThree = true;
    }
  }
  onSubmitStepThree () {
    if (this.registerFormStepThree.valid) {
      const body = {...this.registerFormStepOne.value, ...this.registerFormStepTwo.value, ...this.registerFormStepThree.value}
      console.log('body', body);

    }
  }

}
