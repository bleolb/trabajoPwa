import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercongresoComponent } from './vercongreso.component';

describe('VercongresoComponent', () => {
  let component: VercongresoComponent;
  let fixture: ComponentFixture<VercongresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercongresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
