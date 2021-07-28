import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    typeDoc: ['', Validators.required],
    id: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    public translateService: TranslateService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
    
  }

}
