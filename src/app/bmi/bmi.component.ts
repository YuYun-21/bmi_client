import { Component, OnInit } from '@angular/core';
import {BMIForm} from "../vo/BMIForm";
import {ResultVo} from "../vo/ResultVo";
import {BmiService} from "../service/bmi.service";

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  bmiform:BMIForm;
  resultvo:ResultVo;
  imgeurl:string;

  constructor(private bmiservice:BmiService) {
    this.bmiform=new BMIForm();
    this.resultvo=new ResultVo();
  }

  ngOnInit() {
  }

  getBMIvalue(){
    console.log("身高"+this.bmiform.sg+"体重"+this.bmiform.tz);
    this.bmiservice.getBMIValue(this.bmiform)
      .then((data:any)=>{
        this.resultvo=data;
        this.getPic()
      })
  }

  getPic(){
    switch (this.resultvo.state){
      case "偏瘦":
        this.imgeurl="/assets/images/thin.jpg";
        break;
      case "正常":
        this.imgeurl="/assets/images/normal.jpg";
        break;
      case "微胖":
        this.imgeurl="/assets/images/babyfat.jpg";
        break;
      case "肥胖":
        this.imgeurl="/assets/images/fat.jpg";
        break;
    }
  }

}
