import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortiComponent } from './profil-sorti.component';

describe('ProfilSortiComponent', () => {
  let component: ProfilSortiComponent;
  let fixture: ComponentFixture<ProfilSortiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSortiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
