import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../comp/navbar/register/register.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges {
  console = console;
  public reactiveForm: FormGroup;
  public data: any;
  public email: any;
  public phone: any;
  public objData: any;
  public revData: [];
  public dataService;
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}
  ngOnChanges() {
    // this.reactiveForm = new FormGroup({
    //   gmail: new FormControl(`${this.email}` || undefined),
    //   phone: new FormControl(`${this.phone}` || undefined),
    // });
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log('params', params.get('firstCtrl'));
    //   console.log('this.email', this.email);
    //   console.log('this.phone', this.phone);
    //   this.email = params.get('secondCtrl');
    //   this.phone = params.get('fourthCtrl');
    // });
  }
  ngOnInit() {
    let dataService = this.apiService.sharedData;
    console.log('data from login', dataService);
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log('params', params.get('firstCtrl'));
      // console.log('this.email', this.email);
      // console.log('this.phone', this.phone);
      // this.email = params.get('secondCtrl');
      // // console.log('this.email', this.email);
      // this.phone = params.get('fourthCtrl');
      // this.objData = params.get('firstCtrl');
      // let recivedData = params.get('data');
      let reciveData = params.getAll('firstCtrl');

      // console.log('recivedData', reciveData);

      // console.log('params...............', params.get('firstCtrl'));
    });
    this.reactiveForm = new FormGroup({
      gmail: new FormControl(``),
      phone: new FormControl(``),
      // gmail: new FormControl(`${this.phone}`),
      // phone: new FormControl(`${this.phone}`),
    });
    // let dataGmail = this.activatedRoute.snapshot.paramMap.get('user');
    // console.log('dataGmail', dataGmail);
  }
  openDialog() {
    this.matDialog.open(RegisterComponent, { width: '60%', height: '90vh' });
  }
  gotoHome() {
    this.router.navigate(['home']);
  }
  onSubmit() {
    let data = localStorage.getItem('users');
    let isPresent: boolean =
      data.includes(this.reactiveForm.value.gmail) &&
      data.includes(this.reactiveForm.value.phone);
    if (
      isPresent &&
      this.reactiveForm.value.gmail != '' &&
      this.reactiveForm.value.phone != ''
    ) {
      this.router.navigate(['dashboard']);
    } else {
      alert('user not valid');
      this.router.navigate(['/login']);
    }
    // console.log('data.map', data.includes(this.reactiveForm.value.gmail));
    // console.log('reactiveForm', this.reactiveForm.value.gmail);
  }
  gotoDashboard() {
    let data = localStorage.getItem('users');

    // console.log('data', data);
    // this.router.navigate(['dashboard']);
  }
}
