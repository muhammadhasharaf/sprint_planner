import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryListUpdateComponent } from './story-list-update/story-list-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoryListComponent,
    StoryListUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    StoryListComponent,
    StoryListUpdateComponent
  ]
})
export class SharedModule { }
