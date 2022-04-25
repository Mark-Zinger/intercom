import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {dataResponce} from "../types/dataResponce";
import {Request} from "../types/request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getRequests (page=1, limit=10): Observable<dataResponce<Request>> {
    return this.http.get<dataResponce<Request>>('http://localhost:5000/requests', {
      params: {
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }

}
