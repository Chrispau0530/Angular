import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica06Component } from './practica06.component';

describe('Practica06Component', () => {
  let component: Practica06Component;
  let fixture: ComponentFixture<Practica06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
