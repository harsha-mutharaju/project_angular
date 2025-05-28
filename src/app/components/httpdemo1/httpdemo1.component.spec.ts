import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpdemo1Component } from './httpdemo1.component';

describe('Httpdemo1Component', () => {
  let component: Httpdemo1Component;
  let fixture: ComponentFixture<Httpdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpdemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
