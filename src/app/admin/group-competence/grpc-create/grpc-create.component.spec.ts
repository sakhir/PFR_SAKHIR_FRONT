import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpcCreateComponent } from './grpc-create.component';

describe('GrpcCreateComponent', () => {
  let component: GrpcCreateComponent;
  let fixture: ComponentFixture<GrpcCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpcCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpcCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
