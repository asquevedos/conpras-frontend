import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopublicadorComponent } from './iniciopublicador.component';

describe('IniciopublicadorComponent', () => {
  let component: IniciopublicadorComponent;
  let fixture: ComponentFixture<IniciopublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciopublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
