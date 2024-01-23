import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  partForm:FormGroup;
  term='';
  partbutton=false;
  partList:any=[];
  selectIndex:any;
  updateOpertaion=false;

  constructor(private FormBuilder: FormBuilder) {
    this.partForm= this.FormBuilder.group({
      partName:['',[Validators.required]],
      mrp:['',[Validators.required]]
    })
    let data= localStorage.getItem("PART_LIST");
    if(data)
    this.partList=JSON.parse(data);
   }

  ngOnInit(): void {
  }
  addPart(){
    this.partbutton=true;
    if(this.partForm.valid){
      this.partList.push(this.partForm.value);
localStorage.setItem("PART_LIST" , JSON.stringify(this.partList));

    console.log('Part Details', this.partList);
    alert("Parts Details Added Successfully");
    this.clear();

    }else{
      alert("Please Enter Correct Details")
    }
  }


  updatePart(){
    this.partbutton=true;
    if(this.partForm.valid){
      this.partForm.value.id = this.randomID();

    this.updateOpertaion=false;
this.partList[this.selectIndex].partName=this.partForm.value.partName;
this.partList[this.selectIndex].mrp=this.partForm.value.mrp;
alert("Parts Details Updated Successfully");
localStorage.setItem("PART_LIST" , JSON.stringify(this.partList));
this.clear();
}else{
  alert("Please Enter Correct Details")
}
  }


  editOn(obj:any){
    this.updateOpertaion=true;
this.selectIndex = this.partList.findIndex((x: any) => x.id === x.id);

this.partForm.patchValue({
  partName: obj.partName,
  mrp: obj.mrp
})
  }


  deleteOn(id:any){
    this.selectIndex = this.partList.findIndex((x: any) => x.id === id);

    this.partList.splice(this.selectIndex,1);
    localStorage.setItem("PART_LIST" , JSON.stringify(this.partList));

  }
get f(){
  return this.partForm.controls
}
clear(){
  this.partForm.reset();

}
randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
}
