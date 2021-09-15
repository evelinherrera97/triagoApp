import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';


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
  });
  registerFormStepTwo = this.fb.group({
    typeDoc: ['', Validators.required],
    document: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', Validators.required],
    documentType: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });
  registerFormStepThree = this.fb.group({
    emergencyContactName: ['', Validators.required],
    emergencyContact: ['', Validators.required],
    country: ['', Validators.required],
  });
  info = [
    {
      type: 'current',
      text: '1'
    },
    {
      type: 'next',
      text: '2'
    },
    {
      type: 'next',
      text: '3'
    }
  ]


  constructor(
    private fb: FormBuilder,
    public router: Router,
    public registerServices: RegisterService
  ) { }

  get name() { return this.registerFormStepOne.get('name'); }


  ngOnInit() { }

  onSubmitStepOne() {

    if (this.registerFormStepOne.valid) {
      this.stepTwo = true;
      this.stepOne = false;
      this.info = [
        {
          type: 'ok',
          text: '1'
        },
        {
          type: 'current',
          text: '2'
        },
        {
          type: 'next',
          text: '3'
        }
      ]
    } else {
      // this.registerFormStepOne['controls'][name]  
    }

  }

  public getPin(event: any) {
    this.state = '';
    this.pin = event;
    this.isPin = !event.includes('•');
  }

  onSubmitStepTwo() {
    console.log(this.registerFormStepTwo);

    if (this.registerFormStepTwo.valid) {
      this.stepTwo = false;
      this.stepThree = true;
      this.info = [
        {
          type: 'ok',
          text: '1'
        },
        {
          type: 'ok',
          text: '2'
        },
        {
          type: 'current',
          text: '3'
        }
      ]
    }
  }
  onSubmitStepThree(): void {
    if (this.registerFormStepThree.valid) {
      const body = { ...this.registerFormStepOne.value, ...this.registerFormStepTwo.value, ...this.registerFormStepThree.value }
      this.registerServices.registerUser(body).subscribe((resp) => {
        console.log('respo->', resp);
        console.log('body->', body);
        
        this.router.navigate(['/step-sms'])
      })
      

    }
  }

}
