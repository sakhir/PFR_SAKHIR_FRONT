import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCompetenceComponent } from './group-competence.component';

describe('GroupCompetenceComponent', () => {
  let component: GroupCompetenceComponent;
  let fixture: ComponentFixture<GroupCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
