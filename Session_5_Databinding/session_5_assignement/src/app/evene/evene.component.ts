import { 
Component,
OnInit,
Input,
ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-evene',
  templateUrl: './evene.component.html',
  styleUrls: ['./evene.component.css'],
  encapsulation: ViewEncapsulation.None   /*The general css in the app.component.css will be applied to every component, since the specific component selectors are removed*/
})
export class EveneComponent implements OnInit {
@Input('evenElementVal') oddValue: string;

  constructor() { }

  ngOnInit() {
  }

}
