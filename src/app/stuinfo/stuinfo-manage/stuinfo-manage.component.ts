import { Component, OnInit } from '@angular/core';
import {StuinfoService} from "../../service/stuinfo.service";
import {SFZForm} from "../../vo/SFZForm";
import {Stuinfo} from "../../model/Stuinfo";

@Component({
  selector: 'app-stuinfo-manage',
  templateUrl: './stuinfo-manage.component.html',
  styleUrls: ['./stuinfo-manage.component.css']
})
export class StuinfoManageComponent implements OnInit {
  sfzform:SFZForm;
  stuinfo:Stuinfo;
  sl:Array<Stuinfo>

  constructor(private stuinfoservice:StuinfoService) {
    this.sfzform=new SFZForm();
  }
  //在组件初始化是运行的代码块
  ngOnInit() {
    this.getStuinfoList()
  }

  getStuinfoList(){
    this.sl=new Array();
    this.stuinfoservice.getStuinfoList()
      .then((data:any) =>{
      this.sl=data;

      })
  }
  save(){
    console.dir(this.sfzform);
    if (this.sfzform.stuinfoid){
      //修改操作
      this.stuinfoservice.updateStuinfo(this.sfzform)
        .then((msg:boolean)=>{
          if (msg==true){
            this.getStuinfoList();
          }
          else {
            alert('保存异常，请刷新后重试');
          }
        })
    }
    else {
      //添加操作
      this.stuinfoservice.addStuinfo(this.sfzform)
        .then((msg:boolean)=>{
          if(msg==true){
            this.getStuinfoList();
          }
          else {
            alert('保存异常，请刷新后重试');
          }
        })
    }
  }

  delete(s:Stuinfo){
    console.dir(s);

    this.stuinfoservice.deleteStuinfo(s)
      .then((msg:boolean)=>{

        if(msg==true){
          this.getStuinfoList();
        }
        else {
          alert('删除异常，请刷新后重试');
        }
      })
  }

  toUpdate(s:Stuinfo){
    //console.dir(s);
    this.stuinfoservice.getToUpdateStuinfo(s)
      .then((data:Stuinfo)=>{
      console.dir(data);
      this.sfzform=new SFZForm();
      this.sfzform.xm=data.xm;
      this.sfzform.sfzh=data.sfzh;
      this.sfzform.stuinfoid=data.stuinfoid;
      })
  }

  clear(){
    this.sfzform=new SFZForm();
  }

}
