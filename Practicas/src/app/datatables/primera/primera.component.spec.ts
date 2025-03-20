import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraComponent } from './primera.component';

describe('PrimeraComponent', () => {
  let component: PrimeraComponent;
  let fixture: ComponentFixture<PrimeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
