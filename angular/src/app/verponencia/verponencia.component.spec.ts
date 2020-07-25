import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerponenciaComponent } from './verponencia.component';

describe('VerponenciaComponent', () => {
  let component: VerponenciaComponent;
  let fixture: ComponentFixture<VerponenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerponenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerponenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
