import { Component,
OnInit,
Input,
ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.Emulated /*Default, will apply different selectors to each components (so a general "p" selector in the app.component.css won't be applied to the componenets)*/
})

export class OddComponent implements OnInit {

 @Input('oddElementVal') oddValue: string;
 
  constructor() { }

  ngOnInit() {
  }

}
