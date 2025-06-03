import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaldemo2Component } from './signaldemo2.component';

describe('Signaldemo2Component', () => {
  let component: Signaldemo2Component;
  let fixture: ComponentFixture<Signaldemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaldemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaldemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
