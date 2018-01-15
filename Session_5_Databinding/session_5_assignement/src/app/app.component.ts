import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray = [111,333,555,];
  evenArray = [222,444,666,];
  
  numberAdded(number){
      var check = number.value%2;
    if(check==0){
      this.evenArray.push(number.value);
    }else {
      this.oddArray.push(number.value);
    }
    
  }
}
