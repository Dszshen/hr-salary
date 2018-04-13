import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchMainComponent } from './workbench-main.component';

describe('WorkbenchMainComponent', () => {
  let component: WorkbenchMainComponent;
  let fixture: ComponentFixture<WorkbenchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
