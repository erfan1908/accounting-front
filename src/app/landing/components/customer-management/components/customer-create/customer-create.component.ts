import { Component } from '@angular/core';
import { TabsGroupComponent } from '../../../tabs-group/tabs-group.component';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'customer-create',
  standalone: true,
  imports: [TabsGroupComponent,NgSelectModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {
cities = [
  { id: 1, name: 'تهران' },
  { id: 2, name: 'اصفهان' },
  { id: 3, name: 'تبریز' }
];

}
