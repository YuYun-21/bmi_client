import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuinfoManageComponent } from './stuinfo-manage.component';

describe('StuinfoManageComponent', () => {
  let component: StuinfoManageComponent;
  let fixture: ComponentFixture<StuinfoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuinfoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuinfoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
