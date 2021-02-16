import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersDelComponent } from './list-users-del.component';

describe('ListUsersDelComponent', () => {
  let component: ListUsersDelComponent;
  let fixture: ComponentFixture<ListUsersDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
