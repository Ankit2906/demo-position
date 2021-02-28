import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreatePositionService {
  constructor(private http: HttpClient) {}

  submitPosition(pair: string, price: number): Observable<any> {
    return this.http.post('url', { pair, price });
  }
}
