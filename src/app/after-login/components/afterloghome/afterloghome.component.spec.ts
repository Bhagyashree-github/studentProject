import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloghomeComponent } from './afterloghome.component';

describe('AfterloghomeComponent', () => {
  let component: AfterloghomeComponent;
  let fixture: ComponentFixture<AfterloghomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterloghomeComponent]
    });
    fixture = TestBed.createComponent(AfterloghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
