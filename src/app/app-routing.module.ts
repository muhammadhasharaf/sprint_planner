import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListUpdateComponent } from './shared/story-list-update/story-list-update.component';
import { StoryAddComponent } from './views/story-add/story-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: StoryAddComponent },
  { path: 'update', component: StoryListUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
