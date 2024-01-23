import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staffForm: FormGroup;
  term = '';
  staffButton = false;
  staffList: any = [];
  selectIndex: any;
  editOpertaion = false;

  constructor(private FormBuilder: FormBuilder) {
    this.staffForm = this.FormBuilder.group({
      staff: ['', [Validators.required, Validators.minLength(6)]],
      salary: ['', [Validators.required]]
    })

    let data = localStorage.getItem("STAFF_LIST");
    if (data)
      this.staffList = JSON.parse(data);
  }

  ngOnInit(): void {

  }

  addStaff() {

    this.staffButton = true;
    if (this.staffForm.valid) {
      this.staffForm.value.id = this.randomID();
      this.staffList.push(this.staffForm.value);
      localStorage.setItem("STAFF_LIST", JSON.stringify(this.staffList));
      console.log('Staff Detauls', this.staffList);
      alert("Staff Details Added Successfully");
      this.clear();
    } else {
      alert("Please Enter Correct Details")
    }
  }


  updateStaff() {
    this.staffButton = true;
    if (this.staffForm.valid) {
      this.editOpertaion = false;
      this.staffList[this.selectIndex].staff = this.staffForm.value.staff;
      this.staffList[this.selectIndex].salary = this.staffForm.value.salary;
      alert("Staff Detail Updated Successfully")
      localStorage.setItem("STAFF_LIST", JSON.stringify(this.staffList));
      this.clear();
    } else {
      alert("Please Enter Correct Details")
    }
  }

  update(obj: any) {
    console.log('obj', obj)
    this.editOpertaion = true;
    this.selectIndex = this.staffList.findIndex((x: any) => x.id === obj.id);
    this.staffForm.patchValue({
      staff: obj.staff,
      salary: obj.salary
    })
  }



  delOn(id: any) {
    this.selectIndex = this.staffList.findIndex((x: any) => x.id === id);
    this.staffList.splice(this.selectIndex, 1);
    localStorage.setItem("STAFF_LIST", JSON.stringify(this.staffList));

  }
  get f() {
    return this.staffForm.controls
  }
  clear() {
    this.staffForm.reset();

  }
  randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
