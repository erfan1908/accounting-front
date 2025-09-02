import { Component } from '@angular/core';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [TabsGroupComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
myTabs = [
    { label: 'اطلاعات مالی', content: 'London is the capital city of England.' },
    { label: 'اطلاعات ثبتی', content: 'Paris is the capital of France.' },
    { label: 'اطلاعات تماس', content: 'Tokyo is the capital of Japan.' },
    { label: 'اطلاعات بانکی', content: 'Tokyo is the capital of Japan.' }
  ];
}
