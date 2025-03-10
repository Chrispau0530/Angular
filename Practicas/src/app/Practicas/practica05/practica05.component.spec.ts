import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica05Component } from './practica05.component';

describe('Practica05Component', () => {
  let component: Practica05Component;
  let fixture: ComponentFixture<Practica05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
