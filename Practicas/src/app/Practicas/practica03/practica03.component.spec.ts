import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica03Component } from './practica03.component';

describe('Practica03Component', () => {
  let component: Practica03Component;
  let fixture: ComponentFixture<Practica03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
