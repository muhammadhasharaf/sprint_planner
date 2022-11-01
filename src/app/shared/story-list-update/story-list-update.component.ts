import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-story-list-update',
  templateUrl: './story-list-update.component.html',
  styleUrls: ['./story-list-update.component.scss']
})
export class StoryListUpdateComponent implements OnInit {

  target_point: any;
  selected_stories: any = []
  duplicate_stories: any = []

  constructor(public storyService: StoryService, private tosterService: ToasterService) { }

  ngOnInit(): void {
  }

  AutoPickStories() {

    this.selected_stories = []
    this.storyService.stories.forEach((element: any) => {
      element.checked=false
    });
    this.autoSelect()
  }

  autoSelect() {
    let index = this.selectRandomOne()

    if ((index || index== 0 )&&  index !=undefined) {
      if (this.storyService.stories[index].point <= this.target_point) {

        this.selected_stories.push(this.storyService.stories[index])
        this.storyService.stories[index].checked = true
      } 

    }
    if (this.getSum() < this.target_point) {
      this.autoSelect()
    } else {
      if (this.getSum() > this.target_point) {
        let exes_point = this.getSum() - this.target_point
        if (this.selected_stories.some((x: { point: number; }) => x.point == exes_point)) {
          let index = this.selected_stories.findIndex((x: { point: number; }) => x.point == exes_point)
          this.storyService.stories[index].checked=false
          this.selected_stories.splice(index, 1)
          return;
        } else {
          let index =this.storyService.stories.findIndex((x: { name: any; }) => x.name == this.selected_stories[this.selected_stories.length - 1].name)
          this.storyService.stories[index].checked=false
          this.selected_stories.splice(this.selected_stories.length - 1, 1)
          let balance = this.target_point - this.getSum()
          let balncearray = this.storyService.stories.filter((x: { point: number; }) => x.point <= balance)
          balncearray = balncearray.sort((a: any, b: any) => a.point - b.point);
          if(balncearray.length > 0){
            for(let i=0; i<balncearray.length; i++){
              if(this.getSum() + balncearray[i].point <= this.target_point){
                let index =this.storyService.stories.findIndex((x: { name: any; })=>x.name == balncearray[i].name)
                this.storyService.stories[index].checked=true
                this.selected_stories.push(balncearray[i])
              }else{
                return;
              }
            }
          }
        }

      }
      if (this.getSum() === this.target_point) {
        return;
      }
    }


   
  }






  getSum() {
    let sum = 0;
    for (let i = 0; i < this.selected_stories.length; i++) {
      sum = sum + this.selected_stories[i].point
    }

    return sum;
  }

  selectRandomOne() {
    let index = Math.floor(Math.random() * this.storyService.stories.length);
    if (this.storyService.stories[index].checked) {
      this.selectRandomOne()
      return;
    }
    
      return index;
    
  
  }


  clearStories() {
    if (confirm("Are you sure you want to delete all data?")) {
      this.storyService.stories = []
      this.tosterService.showSuccess("All data removed")
    }
  }


  removeSelectedData() {
   
    if (this.storyService.stories.some((x: { checked: boolean; }) => x.checked)) {
      if (confirm("Are you sure you want to delete data?")) {
        this.storyService.stories.forEach((element: any) => {
          if (element.checked) {
            let index = this.storyService.stories.findIndex((x: { name: string; }) => x.name == element.name)
            this.storyService.stories.splice(index, 1)
          }
        });
        this.tosterService.showSuccess("Data deleted successfully")
      }
    } else {
      this.tosterService.showError("please select some data")
    }
  }

}
