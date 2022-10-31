import { Injectable } from '@angular/core';


export interface story{
  name:string;
  point:number;
  checked:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  stories:any=[]

  constructor() { }
}
