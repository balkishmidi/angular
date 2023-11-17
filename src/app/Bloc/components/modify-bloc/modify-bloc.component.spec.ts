import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBlocComponent } from './modify-bloc.component';

describe('ModifyBlocComponent', () => {
  let component: ModifyBlocComponent;
  let fixture: ComponentFixture<ModifyBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
