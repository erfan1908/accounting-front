import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LandingApiService } from '../../services/laning-api.service';
import { Router } from '@angular/router';



export interface NavItem {
  name: string;
  icon: string;
  link?: string;
  isEnable?: boolean;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})


export class SidebarItemComponent {
  @Input() navItem: any;
  @Input() sidebarMode: boolean = false;

  activeMenu: string | null = null;
  expanded: boolean = false;
  private currentExpanded: string | null = null;
  private lastExpanded:string | null = null;
  constructor(public router: Router , public LandingApiService : LandingApiService) {}



  ngOnInit() {
    const currentUrl = this.router.url;
    // if (this.item.children && this.item.children.length > 0) {
    //   if (
    //     this.item.children.some((child: any) => currentUrl.includes(child.link))
    //   ) {
    //     this.expanded = true;
    //   }
    // } else {
    //   // برای آیتم‌های بدون زیرمجموعه، می‌تونی کلاس active اضافه کنی
    // }
  }

  isChildActive(navItem: any): boolean {
    if (!navItem.children) return false;
    return navItem.children.some((child: any) =>
      this.router.url.includes(child.link)
    );
  }

  
  isOtherActive(child: any, parent: any): boolean {
    if (!parent.children) return false;

    return parent.children.some(
      (c: any) => c.link !== child.link && this.router.url.includes(c.link)
    );
  }

toggleExpand(navItem: any) {
this.expanded = !this.expanded;

}


  }

