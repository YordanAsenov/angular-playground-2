import { Component, Input } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';

@Component({
  selector: 'app-pizze-list',
  templateUrl: './pizze-list.component.html',
  styleUrls: ['./pizze-list.component.less']
})
export class PizzeListComponent {
  @Input()
  pizzeInput!: Pizza[];

  imageUrl: string = "https://www.giallozafferano.it/images/249-24919/Pizza-napoletana_650x433_wm.jpg";
}
