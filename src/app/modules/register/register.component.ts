import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public stepOne = true;
  public stepTwo = false;
  public stepThree = false;


  pin: any;
  isPin = false;
  state: string;

  registerFormStepOne = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    surname: ['', [Validators.required, Validators.minLength(4)]],
    birthDate: ['', Validators.required],
  })
  registerFormStepTwo = this.fb.group({
    typeDoc: ['', Validators.required],
    document: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', Validators.required],
    documentType: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  })
  registerFormStepThree = this.fb.group({
    emergencyContactName: ['', Validators.required],
    emergencyContact: ['', Validators.required],
    country: ['', Validators.required],
  })


  constructor(
    private fb: FormBuilder,
    public router: Router
  ) { }

  get name() { return this.registerFormStepOne.get('name'); }


  ngOnInit() {}

  onSubmitStepOne() {
    
    if (this.registerFormStepOne.valid) {
      this.stepTwo = true;
      this.stepOne = false;
    } else {
      // this.registerFormStepOne['controls'][name]  
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
      this.router.navigate(['/step-sms'])
      const body = {...this.registerFormStepOne.value, ...this.registerFormStepTwo.value, ...this.registerFormStepThree.value}
      console.log('body', body);

    }
  }

}
