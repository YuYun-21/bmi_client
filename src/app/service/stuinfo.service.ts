import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SFZForm} from "../vo/SFZForm";
import {Stuinfo} from "../model/Stuinfo";

@Injectable({
  providedIn: 'root'
})
export class StuinfoService {

  constructor(private http:HttpClient) { }

  private getStuinfoListUrl="http://localhost:8080/getStuinfoList";

  getStuinfoList(){
    return this.http.get(this.getStuinfoListUrl).toPromise();
  }
  private addStuinfoUrl="http://localhost:8080/addStuinfo"
  addStuinfo(sfzform:SFZForm){
    return this.http.post(this.addStuinfoUrl,sfzform).toPromise();
  }
  private deleteStuinfoUrl="http://localhost:8080/deleteStuinfo";
  deleteStuinfo(stuinfo:Stuinfo){
    return this.http.post(this.deleteStuinfoUrl,stuinfo).toPromise();
  }
  private getToUpdateStuinfoUrl="http://localhost:8080/getSingleStuinfo";
  getToUpdateStuinfo(stuinfo:Stuinfo){
    return this.http.post(this.getToUpdateStuinfoUrl,stuinfo).toPromise();
  }
  private updateStuinfoUrl="http://localhost:8080/updateStuinfo";
  updateStuinfo(sfzform:SFZForm){
    return this.http.post(this.updateStuinfoUrl,sfzform).toPromise();
  }

}
