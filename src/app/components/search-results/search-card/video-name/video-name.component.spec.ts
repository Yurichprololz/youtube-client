import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoNameComponent } from './video-name.component';

describe('VideoNameComponent', () => {
  let component: VideoNameComponent;
  let fixture: ComponentFixture<VideoNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoNameComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
