import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticticsCountComponent } from './statictics-count.component';

describe('StaticticsCountComponent', () => {
  let component: StaticticsCountComponent;
  let fixture: ComponentFixture<StaticticsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticticsCountComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticticsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
