import { Component, Input, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail-model',
  templateUrl: './card-detail-model.component.html',
  styleUrls: ['./card-detail-model.component.scss'],
})
export class CardDetailModelComponent implements OnInit {
  // public singleData: any;
  // @Input() single: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
    // console.log(this.single);
    // console.log('this.data', this.data);
    // this.singleData = this.data;
  }
}
