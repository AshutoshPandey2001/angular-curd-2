import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
 
loginop=false;
  constructor(private FormBuilder: FormBuilder) { 
    this.loginForm=this.FormBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
  login(){
this.loginop=true;
if(this.loginForm.valid){
  alert("Login Successfully ")
  console.log('Email: , Password:', this.loginForm.value );
  this.loginForm.reset();
}else{
  alert("Please Enter Correct Details")
}
  }
  get f(){
    return this.loginForm.controls
  }
}
