import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InUseComponent } from './in-use.component';

describe('InUseComponent', () => {
  let component: InUseComponent;
  let fixture: ComponentFixture<InUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InUseComponent]
    });
    fixture = TestBed.createComponent(InUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
