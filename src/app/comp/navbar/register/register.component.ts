import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
interface Users {
  firstCtrl: any;
  secondCtrl: any;
  thirdCtrl: any;
  fourthCtrl: any;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() childToParent = new EventEmitter<String>();
  public errorMsg: any;

  console = console;
  store = [];
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public apiService: ApiService
  ) {}
  ngOnInit(): void {}
  fireEvent() {
    this.childToParent.emit('hello');
  }
  onSubmit() {
    const data = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
      ...this.fourthFormGroup.value,
    };
    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem('users'))
      ? JSON.parse(localStorage.getItem('users'))
      : [];
    userRecords.push(data);
    localStorage.setItem('users', JSON.stringify(userRecords));
    this.apiService.sharedData = data;

    // this.router.navigate(['/login', data]);

    this.router.navigate(['/login']);
    this.apiService.postFormData(data).subscribe(
      (data) => data,
      (error) => (this.errorMsg = error.statusText)
    );

    // this.dialogRef.close();
    // if (this.router.navigate(['/login'])) {
    //   this.dialogRef.close();
    // }
  }
  gotoLogin(data: any) {
    // this.router.navigate(['login']);
    // this.dialogRef.close();
    // console.log('data', data);
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isLinear = false;
}
