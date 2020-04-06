import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridimgComponent } from './gridimg.component';

describe('GridimgComponent', () => {
  let component: GridimgComponent;
  let fixture: ComponentFixture<GridimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
