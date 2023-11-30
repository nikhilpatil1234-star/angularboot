import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-seletedpopup',
  templateUrl: './seletedpopup.component.html',
  styleUrls: ['./seletedpopup.component.scss'],
})
export class SeletedpopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
