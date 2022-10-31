import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { story, StoryService } from 'src/app/services/story.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.scss']
})
export class StoryAddComponent implements OnInit {

  storyAddForm: any = FormGroup
  is_duplicated=false

  constructor(private formBuilder: FormBuilder, public storyService: StoryService,private toaster:ToasterService) { }

  ngOnInit(): void {
    this.storyAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      point: ['', Validators.required]
    })
  }

  addStory() {
    if (this.storyAddForm.invalid) {
      return;
    }

    this.is_duplicated=false
    var data: story = {
      name: this.storyAddForm.get('name').value,
      point: this.storyAddForm.get('point').value,
      checked:false
    }

    if(this.storyService.stories.length > 0){
      if(this.storyService.stories.every((x: { name: string; })=>x.name.toLowerCase() !== data.name.toLowerCase())){
        this.storyService.stories.push(data)
      }else{
      this.is_duplicated=true
      return;
      }
    }else{
      this.storyService.stories.push(data)
    }

    this.storyAddForm.reset()

    this.toaster.showSuccess("New story created successfully")
  }



}
