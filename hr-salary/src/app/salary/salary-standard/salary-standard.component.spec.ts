import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStandardComponent } from './salary-standard.component';

describe('SalaryStandardComponent', () => {
  let component: SalaryStandardComponent;
  let fixture: ComponentFixture<SalaryStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
