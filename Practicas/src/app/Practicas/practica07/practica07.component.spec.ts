import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica07Component } from './practica07.component';

describe('Practica07Component', () => {
  let component: Practica07Component;
  let fixture: ComponentFixture<Practica07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
