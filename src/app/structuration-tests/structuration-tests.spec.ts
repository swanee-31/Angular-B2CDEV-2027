import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurationTests } from './structuration-tests';

describe('StructurationTests', () => {
  let component: StructurationTests;
  let fixture: ComponentFixture<StructurationTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructurationTests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurationTests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
