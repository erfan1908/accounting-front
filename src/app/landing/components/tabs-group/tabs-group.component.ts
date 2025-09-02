import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  label: string;   // متن روی تب
  content: string; // محتوای تب
}

@Component({
  selector: 'tabs-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-group.component.html',
  styleUrl: './tabs-group.component.scss'
})
export class TabsGroupComponent {
  @Input() tabs: Tab[] = [];
  activeTabIndex = 0; // پیش‌فرض اولین تب فعال است
 @Input() tabLabels: string[] = [];

  setActive(index: number) {
    this.activeTabIndex = index;
  }
}
