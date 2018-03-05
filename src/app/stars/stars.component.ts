import { Component, OnInit,OnChanges, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

    private stars: boolean[];
    @Input()
    private rating: number=0;

    @Output()
    private ratingChange: EventEmitter<number> = new EventEmitter();
    //rating + change -- so able to use [(rating)] in product detail template
    // if not rating + change, have to add (event) in the product detail template

    //create read comment star
    //readonly comment is non-editable
    @Input()
    private readonly: boolean = true;

  constructor() { }

  ngOnInit() {
      //this.stars = [];
      //for(let i = 1; i <=5; i++){
         // this.stars.push(i> this.rating);//i > this.rating --> generate true or false
     //}
      //this.stars=[true, true, true, true, true];
  }


    // bug: once submit the comment, the start will keep the lastest value instead of default value
    //so use ngOnChanges to fix it
 //if the rating changes, stars array changes as well -- ngOnChanges
   ngOnChanges (){
       this.stars = [];
       for(let i = 1; i <=5; i++){
           this.stars.push(i> this.rating);//i > this.rating --> generate true or false
       }
   }

  clickStar(index: number){
     if(!this.readonly){
          this.rating = index + 1;//add 1 to the original star number
          //update the stars array in ngOnInit
          //this.ngOnInit(); //rating changes, ngOnInit will load it 
          //emit the star number to parent component
          this.ratingChange.emit(this.rating);
      }

  }

}
