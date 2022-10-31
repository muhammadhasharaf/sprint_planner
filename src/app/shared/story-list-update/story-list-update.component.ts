import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-story-list-update',
  templateUrl: './story-list-update.component.html',
  styleUrls: ['./story-list-update.component.scss']
})
export class StoryListUpdateComponent implements OnInit {

  target_point:any;

  constructor(public storyService:StoryService, private tosterService:ToasterService) { }

  ngOnInit(): void {
  }

  autoSelect(){
   if(this.storyService.stories.length > 0){
    if(this.target_point){
    this.storyService.stories.forEach((element: any) => {
      if(element.point == this.target_point){
        element.checked=true
      }else{
        element.checked=false
      }

    });
  }else{
    this.tosterService.showError("Please enter target value");
  }
   }
  }


  clearStories(){
    if(confirm("Are you sure you want to delete all data?")){
      this.storyService.stories=[]
      this.tosterService.showSuccess("All data removed")
    }
  }


  removeSelectedData(){
    console.log(this.storyService.stories)
    if(this.storyService.stories.some((x: { checked: boolean; })=>x.checked)){
      if(confirm("Are you sure you want to delete data?")){
        this.storyService.stories.forEach((element: any) => {
          if(element.checked){
            let index=this.storyService.stories.findIndex((x: { name: string; })=>x.name == element.name)
            this.storyService.stories.splice(index,1)
          }
        });
        this.tosterService.showSuccess("Data deleted successfully")
      }
    }else{
      this.tosterService.showError("please select some data")
    }
  }

}
