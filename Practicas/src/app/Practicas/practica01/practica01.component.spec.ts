import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica01Component } from './practica01.component';

describe('Practica01Component', () => {
  let component: Practica01Component;
  let fixture: ComponentFixture<Practica01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
