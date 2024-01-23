import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  billForm: FormGroup;
  term = '';
  billbutton = false;
  billList: any = [];
  editButton = false;

  selectIndex: any;
  constructor(private FormBuilder: FormBuilder) {
    this.billForm = this.FormBuilder.group({
      customerName: ['', [Validators.required, Validators.minLength(6)]],
      billDate: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
    let data = localStorage.getItem("BILL_LIST");
    if (data)
      this.billList = JSON.parse(data);
  }

  ngOnInit(): void {
  }
  addBill() {
    this.billbutton = true;
    if (this.billForm.valid) {
      this.billForm.value.id = this.randomID();
      this.billList.push(this.billForm.value);
      localStorage.setItem("BILL_LIST", JSON.stringify(this.billList));
      console.log('Bills/Invoice Details', this.billList);
      alert("Invoice aadded Successfully");
      this.clear();
    } else {
      alert("Please Enter Correct Details")
    }
  }

  updateBill() {
    this.billbutton = true;
    if (this.billForm.valid) {
      this.editButton = false;
      this.billList[this.selectIndex].customerName = this.billForm.value.customerName;
      this.billList[this.selectIndex].billDate = this.billForm.value.billDate;
      this.billList[this.selectIndex].amount = this.billForm.value.amount;
      alert("Invoice Updated Successfully");
      localStorage.setItem("BILL_LIST", JSON.stringify(this.billList));
      this.clear();
    } else {
      alert("Please Enter Correct Details")
    }
  }


  updateOn( obj: any) {
    this.editButton = true;
    this.selectIndex = this.billList.findIndex((x: any) => x.id === obj.id);

    this.billForm.patchValue({
      customerName: obj.customerName,
      billDate: obj.billDate,
      amount: obj.amount
    })
  }

  onDel(id:any) {
    this.selectIndex = this.billList.findIndex((x: any) => x.id === id);

    this.billList.splice(this.selectIndex, 1);
    localStorage.setItem("BILL_LIST", JSON.stringify(this.billList));

  }

  get f() {
    return this.billForm.controls
  }
  clear() {
    this.billForm.reset();
  }
  randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
