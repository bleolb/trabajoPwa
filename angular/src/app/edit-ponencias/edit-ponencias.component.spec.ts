import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPonenciasComponent } from './edit-ponencias.component';

describe('EditPonenciasComponent', () => {
  let component: EditPonenciasComponent;
  let fixture: ComponentFixture<EditPonenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPonenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPonenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
