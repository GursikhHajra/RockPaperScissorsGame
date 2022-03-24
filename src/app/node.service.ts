import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }
  retrieve(params) {
    return this.http.get('http://127.0.0.1:8887/retrieve/',
      { params });
  }
}
