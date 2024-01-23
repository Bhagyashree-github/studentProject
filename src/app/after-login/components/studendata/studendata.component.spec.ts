import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendataComponent } from './studendata.component';

describe('StudendataComponent', () => {
  let component: StudendataComponent;
  let fixture: ComponentFixture<StudendataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudendataComponent]
    });
    fixture = TestBed.createComponent(StudendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
