import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

  message: string = "";
  response: string = "";

  constructor(private http: HttpClient) {}

  sendMessage() {

    const data = {
      message: this.message
    };

    this.http.post(
      "http://localhost:5241/api/chat",
      data,
      { responseType: 'text' }
    )
    .subscribe(res => {
      this.response = res;
    });

  }

}
