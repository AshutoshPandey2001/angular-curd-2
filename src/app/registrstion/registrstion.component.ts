import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrstion',
  templateUrl: './registrstion.component.html',
  styleUrls: ['./registrstion.component.scss']
})
export class RegistrstionComponent implements OnInit {
regForm:FormGroup;
  regbutton=false;
  
  constructor(private FormBuilder: FormBuilder) { 
    this.regForm=this.FormBuilder.group({
      fullName:['', [Validators.required,Validators.minLength(8)]],
      mob:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      dob:['',[Validators.required]],
      remail:['',[Validators.required]],
      rpass:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
  register(){
this.regbutton=true;
if(this.regForm.valid){
  console.log('Registration Details:',this.regForm.value)
  alert("Registration Successfully Completed")
this.regForm.reset();
}else{
  alert("Please Enter Correct Details")
}
    

  }
  get f(){
    return this.regForm.controls
  }
}
