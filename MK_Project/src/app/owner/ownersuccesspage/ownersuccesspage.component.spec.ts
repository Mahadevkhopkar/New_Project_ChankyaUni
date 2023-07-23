import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersuccesspageComponent } from './ownersuccesspage.component';

describe('OwnersuccesspageComponent', () => {
  let component: OwnersuccesspageComponent;
  let fixture: ComponentFixture<OwnersuccesspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersuccesspageComponent]
    });
    fixture = TestBed.createComponent(OwnersuccesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
