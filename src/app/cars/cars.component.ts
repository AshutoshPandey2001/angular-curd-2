import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carForm:FormGroup;
  term='';
addcars=false;
 
  carList:any=[];
  selectIndex:any;
  editOperation=false;

  constructor(private FormBuilder: FormBuilder) {
    this.carForm= this.FormBuilder.group({
      carName:['',[Validators.required]],
      carMod:['',[Validators.required]]
    })

    let data= localStorage.getItem("CAR_LIST");
    if(data)
    this.carList=JSON.parse(data);
   }

  ngOnInit(): void {
  }
  
  addCar(){
    
   this.addcars=true;
   if(this.carForm.valid){
    this.carForm.value.id = this.randomID();

    this.carList.push(this.carForm.value);
    localStorage.setItem("CAR_LIST" , JSON.stringify(this.carList));
        console.log('Car Details',this.carList);
        alert("Car details Added Successfully");
        this.clear();
    
   }else{
     alert("Please Enter correct Details")
   }

  }
  updateCar(){
    this.addcars=true;
    if(this.carForm.valid){
    this.editOperation=false;
this.carList[this.selectIndex].carName=this.carForm.value.carName;
this.carList[this.selectIndex].carMod=this.carForm.value.carMod;
localStorage.setItem("CAR_LIST" , JSON.stringify(this.carList));
alert("Car details Updated Successfully")
this.clear();
}else{
  alert("Please Enter correct Details")
}
  }
  onEdit( obj:any){
    this.editOperation=true;
this.selectIndex = this.carList.findIndex((x: any) => x.id === x.id);

this.carForm.patchValue({
  carName: obj.carName,
  carMod: obj.carMod
})
  }
  onDelete(id :any ){
    this.selectIndex = this.carList.findIndex((x: any) => x.id === id);

  this.carList.splice(this.selectIndex
    ,1)
  localStorage.setItem("CAR_LIST" , JSON.stringify(this.carList));

  }
 get f(){
   return this.carForm.controls
 }
 clear(){
  this.carForm.reset();

 }
 randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
}
