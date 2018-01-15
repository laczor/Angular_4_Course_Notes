import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
@Output('numChange') numberAdd = new EventEmitter<{value: number}>();

      score =10;
      intervallref;
  constructor() {
        console.log(this);
  }
      
  ngOnInit() {
  }
  
// Properties with setInterval has to be binded, since this. is referring to the window, with binding, this referes to the component 
  startgame(){
    this.intervallref = setInterval(this.incr.bind(this), 2000);
  }
  incr(){
    this.score = this.score + 1;
    this.numberAdd.emit({value: this.score});
  }
  stopgame(){
    clearInterval(this.intervallref);
  }
}
    
  
  
