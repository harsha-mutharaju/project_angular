import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaldemo1Component } from './signaldemo1.component';

describe('Signaldemo1Component', () => {
  let component: Signaldemo1Component;
  let fixture: ComponentFixture<Signaldemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaldemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaldemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
