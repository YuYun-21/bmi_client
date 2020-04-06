import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StuinfoManageComponent} from "./stuinfo/stuinfo-manage/stuinfo-manage.component";
import {BmiComponent} from "./bmi/bmi.component";
import {GridimgComponent} from "./gridimg/gridimg.component";


const routes: Routes = [
  {path:'stuinfomanage',component:StuinfoManageComponent},
  {path:'bmi',component:BmiComponent},
  {path:'gridimg',component:GridimgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
