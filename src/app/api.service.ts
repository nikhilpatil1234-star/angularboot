import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  sharedData: any;
  _URL = 'http://localhost:4200';
  constructor(private http: HttpClient) {}

  getData(): string {
    return this.sharedData;
  }
  getAllData() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=50'
    );
  }
  getDataById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
  postFormData(user: any) {
    return this.http
      .post<any>(this._URL, user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  dropDownService() {
    return this.http.get('https://api.github.com/users');
  }
}
