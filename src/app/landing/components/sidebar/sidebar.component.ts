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
  expended: boolean;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarMode: 'true' | 'false' = 'true';
  expandedMenu: string | null = null;
  currentExpanded: string | null = null;
  lastExpanded: string | null = null; 
  navbarList: NavItem[] = [
    { name: 'پنل کاربری', icon: 'home-2', link: 'user-panel' ,expended : false},
    { name: 'داشبورد', icon: 'dashboard', link: 'dashboard' ,expended : false},
    {
      name: 'کالا خدمات',
      icon: 'shopping-bag',
      expended : false,
      children: [
        { name: 'کالا جدید', icon: 'chart', link: 'stuff/create',expended : false },
        { name: 'لیست کالا', icon: 'chart', link: 'stuff/list',expended : false },
      ],
    },

    {
      name: 'اشخاص',
      icon: 'shopping-bag',
       expended : false,
      children: [
        { name: 'ایجاد شخص جدید', icon: 'chart', link: 'customer/create',expended : false },
        { name: 'لیست اشخاص', icon: 'chart', link: 'customer/list' ,expended : false},
      ],
    },

    {
      name: 'گزارشات',
      icon: 'report',
      expended : false,
      children: [
        { name: 'گزارش فروش', icon: 'chart', link: 'reports/sales' ,expended : false},
        { name: 'گزارش خرید', icon: 'chart', link: 'reports/purchase' ,expended : false},
      ],
    },
  ];

  toggleSidebar() {
    this.sidebarMode = this.sidebarMode === 'true' ? 'false' : 'true';
  }


  // متدی که توسط آیتم‌های فرزند صدا زده میشه



    onToggleExpand(navItem: any) {
    if (this.currentExpanded === null && this.lastExpanded === null) {
      this.currentExpanded = navItem.name;
      this.lastExpanded = navItem.name;
      console.log("if current is empty = ", this.currentExpanded);
    } else {
      console.log("not empty");
      this.lastExpanded = this.currentExpanded;
      this.currentExpanded = navItem.name;
    }
  }

}
