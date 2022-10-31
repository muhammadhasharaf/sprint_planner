import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListUpdateComponent } from './story-list-update.component';

describe('StoryListUpdateComponent', () => {
  let component: StoryListUpdateComponent;
  let fixture: ComponentFixture<StoryListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryListUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
