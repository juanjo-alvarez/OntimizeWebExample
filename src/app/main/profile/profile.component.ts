import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService, OFormComponent, OPasswordInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;
  @ViewChild('pwdconf',{static:true}) pwdconf:OPasswordInputComponent;

  public validatorArray: ValidatorFn[] = [];

  constructor(private auth:AuthService) {
  }

  ngOnInit() {
    this.validatorArray.push(this.matchValidator);
  }

  ngAfterViewInit(){
    this.form.queryData({USER_:this.auth.getSessionInfo().user});
  }

  formInit(){
    this.form.setFieldValue("PASSWORDCONFIRM",this.form.getFieldValue("PASSWORD"));
  }

  public matchValidator(control: FormControl): ValidationErrors {
    try {
      const password = control.parent ? control.parent.controls['PASSWORD'].value : null
      const passwordConfirm = control.parent ? control.parent.controls['PASSWORDCONFIRM'].value : null
      if(password && passwordConfirm && password != passwordConfirm){
        return { mustMatch: true }
      }else{
        return null;
      }
    }catch(e){
      return null;
    }
  }

  public reviewMatches(event: Event){
    this.form.formGroup.controls['PASSWORDCONFIRM'].updateValueAndValidity();
    this.form.formGroup.get('PASSWORDCONFIRM').markAsTouched();
  }
}
