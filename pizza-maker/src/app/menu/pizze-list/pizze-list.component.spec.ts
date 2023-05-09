import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeListComponent } from './pizze-list.component';

describe('PizzeListComponent', () => {
  let component: PizzeListComponent;
  let fixture: ComponentFixture<PizzeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
