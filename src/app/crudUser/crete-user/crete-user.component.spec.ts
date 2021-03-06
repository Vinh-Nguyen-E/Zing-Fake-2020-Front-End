import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteUserComponent } from './crete-user.component';

describe('CreteUserComponent', () => {
  let component: CreteUserComponent;
  let fixture: ComponentFixture<CreteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
