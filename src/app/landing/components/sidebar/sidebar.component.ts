import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LandingApiService } from '../../services/laning-api.service';

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
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    public router: Router,
    public LandingApiService: LandingApiService
  ) {}
  expanded: boolean = false;
  navbarList: NavItem[] = [
    { name: 'پنل کاربری', icon: 'home-2', link: 'user-panel', expended: false },
    { name: 'داشبورد', icon: 'dashboard', link: 'dashboard', expended: false },
    {
      name: 'اطلاعات بانک',
      icon: 'dashboard',
      link: 'bankinfo',
      expended: false,
    },
    { name: 'صندوق', icon: 'dashboard', link: 'fund', expended: false },
    {
      name: 'کالا خدمات',
      icon: 'shopping-bag',
      expended: false,
      children: [
        {
          name: 'ایجاد کالا',
          icon: 'chart',
          link: 'stuff/stuffcreate',
          expended: false,
        },
        {
          name: 'ایجاد خدمات',
          icon: 'chart',
          link: 'stuff/servicecreate',
          expended: false,
        },
        {
          name: 'لیست کالا خدمات',
          icon: 'chart',
          link: 'stuff/list',
          expended: false,
        },
      ],
    },

    {
      name: 'اشخاص',
      icon: 'shopping-bag',
      expended: false,
      children: [
        {
          name: 'ایجاد شخص جدید',
          icon: 'chart',
          link: 'customer/create',
          expended: false,
        },
        {
          name: 'لیست اشخاص',
          icon: 'chart',
          link: 'customer/list',
          expended: false,
        },
      ],
    },

    {
      name: 'گزارشات',
      icon: 'report',
      expended: false,
      children: [
        {
          name: 'گزارش فروش',
          icon: 'chart',
          link: 'reports/sales',
          expended: false,
        },
        {
          name: 'گزارش خرید',
          icon: 'chart',
          link: 'reports/purchase',
          expended: false,
        },
      ],
    },
  ];

  // onToggleExpand(navItem: any) {
  //   if (this.currentExpanded === null && this.lastExpanded === null) {
  //     this.currentExpanded = navItem.name;
  //     this.lastExpanded = navItem.name;
  //     console.log('if current is empty = ', this.currentExpanded);
  //   } else {
  //     console.log('not empty');
  //     this.lastExpanded = this.currentExpanded;
  //     this.currentExpanded = navItem.name;
  //   }
  // }
  isChildActive(navItem: any): boolean {
    if (!navItem.children) return false;
    return navItem.children.some((child: any) =>
      this.router.url.includes(child.link)
    );
  }
 toggleExpand(navItem: NavItem) {
  if (navItem.expended) {
    // اگه آیتم الان بازه → فقط خودش رو ببند
    navItem.expended = false;
  } else {
    // اول همه آیتم‌ها رو ببند
    this.navbarList.forEach((item) => {
      if (item.children) {
        item.expended = false;
      }
    });

    // بعد فقط آیتم کلیک‌شده رو باز کن
    navItem.expended = true;
  }
}

}
