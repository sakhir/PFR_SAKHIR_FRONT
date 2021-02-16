import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefCreateComponent } from './ref-create.component';

describe('RefCreateComponent', () => {
  let component: RefCreateComponent;
  let fixture: ComponentFixture<RefCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
