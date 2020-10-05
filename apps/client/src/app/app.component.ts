import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@zerops-nx-angular-nestjs/api-interfaces';

@Component({
  selector: 'zerops-nx-angular-nestjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
