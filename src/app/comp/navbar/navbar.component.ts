import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private matDialog: MatDialog) {}
  gotoIntro() {
    this.router.navigate(['']);
  }
  openDialog() {
    this.matDialog.open(RegisterComponent, {
      width: '60%',
      height: '90vh',
    });
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
