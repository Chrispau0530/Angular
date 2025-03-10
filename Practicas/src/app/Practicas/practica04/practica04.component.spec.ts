import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica04Component } from './practica04.component';

describe('Practica04Component', () => {
  let component: Practica04Component;
  let fixture: ComponentFixture<Practica04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
