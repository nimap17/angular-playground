import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   public helloTitle = "i am hello";
   public hiTitle = " i am hi";
   public techTitle = " tech here";
  constructor() { }
}

