import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrstionComponent } from './registrstion.component';

describe('RegistrstionComponent', () => {
  let component: RegistrstionComponent;
  let fixture: ComponentFixture<RegistrstionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrstionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
