import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  constructor(public storyService:StoryService) { }

  ngOnInit(): void {
  }


  changeValue(story:any){
    story.checked =!story.checked
  }
}
