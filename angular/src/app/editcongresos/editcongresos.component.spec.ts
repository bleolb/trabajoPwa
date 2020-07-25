import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcongresosComponent } from './editcongresos.component';

describe('EditcongresosComponent', () => {
  let component: EditcongresosComponent;
  let fixture: ComponentFixture<EditcongresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcongresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcongresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
