import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInfoPageComponent } from './detailed-info-page.component';

describe('DetailedInfoPageComponent', () => {
  let component: DetailedInfoPageComponent;
  let fixture: ComponentFixture<DetailedInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInfoPageComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
