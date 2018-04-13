import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryMainComponent } from './salary-main.component';

describe('SalaryMainComponent', () => {
  let component: SalaryMainComponent;
  let fixture: ComponentFixture<SalaryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
