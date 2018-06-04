import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
 

  
  constructor(private dragula: DragulaService) {

    dragula.setOptions('bag-task1', {
      removeOnSpill: true
    });
    dragula.setOptions('bag-task2', {
      revertOnSpill: true
    });
    dragula.setOptions('bag-task3', {
      copy: true
    });
  }


}