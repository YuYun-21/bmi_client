import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BMIForm} from "../vo/BMIForm";
import {post} from "selenium-webdriver/http";
import {Stuinfo} from "../model/Stuinfo";

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor(private http:HttpClient) { }

  private getBMIValueUrl="http://localhost:8080/getBMIValue";

  getBMIValue(bmiform:BMIForm){
    return this.http.post(this.getBMIValueUrl,bmiform).toPromise();

  }
  private deleteStuinfoUrl="http://localhost:8080/deleteStuinfo";

  deleteStuinfo(stuinfo:Stuinfo){
    return this.http.post(this.deleteStuinfoUrl,stuinfo).toPromise();
  }
}
