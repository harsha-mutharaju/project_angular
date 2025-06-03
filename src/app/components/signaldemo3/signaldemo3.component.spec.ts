import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaldemo3Component } from './signaldemo3.component';

describe('Signaldemo3Component', () => {
  let component: Signaldemo3Component;
  let fixture: ComponentFixture<Signaldemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaldemo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaldemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
