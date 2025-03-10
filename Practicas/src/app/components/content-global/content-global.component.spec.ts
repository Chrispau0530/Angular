import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGlobalComponent } from './content-global.component';

describe('ContentGlobalComponent', () => {
  let component: ContentGlobalComponent;
  let fixture: ComponentFixture<ContentGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
