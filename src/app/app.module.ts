import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StuinfoManageComponent } from './stuinfo/stuinfo-manage/stuinfo-manage.component';
import { BmiComponent } from './bmi/bmi.component';
import { GridimgComponent } from './gridimg/gridimg.component';

@NgModule({
  declarations: [
    AppComponent,
    StuinfoManageComponent,
    BmiComponent,
    GridimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
