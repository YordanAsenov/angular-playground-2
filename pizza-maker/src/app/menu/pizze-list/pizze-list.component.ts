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
}
