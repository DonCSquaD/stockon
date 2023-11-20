import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCardComponent } from './add-card.component';

describe('AddCardComponent', () => {
  let component: AddCardComponent;
  let fixture: ComponentFixture<AddCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCardComponent]
    });
    fixture = TestBed.createComponent(AddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
