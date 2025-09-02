import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

interface NavItem {
  name: string;
  icon: string;
  link?: string;
  isEnable?: boolean;
  children?: NavItem[];
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule,SidebarItemComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarMode: 'true' | 'false' = 'true';

navbarList: NavItem[] = [
  { name: 'پنل کاربری', icon: 'home-2', link: 'user-panel' },
  { name: 'داشبورد', icon: 'dashboard', link: 'dashboard' },
  { name: 'کالا خدمات', icon: 'shopping-bag', link: 'stuff' },
  { name: 'مشتری', icon: 'shopping-bag', link: 'customer' },
  {
    name: 'گزارشات',
    icon: 'report',
    children: [
      { name: 'گزارش فروش', icon: 'chart', link: 'reports/sales' },
      { name: 'گزارش خرید', icon: 'chart', link: 'reports/purchase' },
    ]
  }
];


  toggleSidebar() {
    this.sidebarMode = this.sidebarMode === 'true' ? 'false' : 'true';
  }

  copyPhoneNumber() {
    navigator.clipboard.writeText("02171117555");
    alert("شماره کپی شد ✅");
  }


}
