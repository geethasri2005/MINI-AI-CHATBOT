import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators'; 
import { throwError, Observable } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message: string = "";
  response: string = "";
  errorMessage: string = "";

  constructor(private http: HttpClient) {}

  sendMessage() {
    const data = { message: this.message };
    this.http.post<string>("http://localhost:5241/api/chat", data)
      .pipe(
        catchError(this.handleError) 
      .subscribe(
        (res: string) => { 
          this.response = res;
          this.errorMessage = ""; 
        },
        (error: any) => { 
          console.error('Error in subscription:', error);
        }
      );
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
     
      console.error('An error occurred:', error.error);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
   
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
