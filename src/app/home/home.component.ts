import { Component, Injectable, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { Idata, Ifood } from '../interfaces';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardDetailModelComponent } from './card-detail-model/card-detail-model.component';
import { Router } from '@angular/router';
import { SeletedpopupComponent } from '../comp/seletedpopup/seletedpopup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedValue: string;
  console = console;
  filteredData: any | null | undefined;
  // foods: Ifood[] = [
  //   { value: 'all', viewValue: 'All' },
  //   { value: 'desc', viewValue: 'desc' },
  //   { value: 'asce', viewValue: 'asce' },
  // ];
  foods: any;
  public data: Idata[] = [];
  // public singleData: Idata[] = [];
  constructor(
    private apiService: ApiService,
    private readonly matDialog: MatDialog,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.getData();
    this.getDropDown();
  }
  getData() {
    this.apiService.getAllData().subscribe((resp: any) => (this.data = resp));
  }
  getDataId(event: any) {
    // console.log('event', event);
    // this.apiService
    //   .getDataById(event)
    //   .subscribe((resp: any) => (this.singleData = resp));

    // this.router.navigate(['/home', event]);
    this.matDialog.open(CardDetailModelComponent, {
      width: '600px',
      minHeight: '600px',
      data: event,
    });
  }
  getDropDown() {
    this.apiService.dropDownService().subscribe((data) => {
      this.foods = data;
    });
  }
  selectOption(data: any) {
    // this.selectedValue = data;
    this.matDialog.open(SeletedpopupComponent, {
      width: '600px',
      minHeight: '600px',
      data: data,
    });
    console.log('id', data);
  }
  openDialog() {}
}
