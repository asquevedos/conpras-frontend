import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisnegociosComponent } from './misnegocios.component';

describe('MisnegociosComponent', () => {
  let component: MisnegociosComponent;
  let fixture: ComponentFixture<MisnegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisnegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisnegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
