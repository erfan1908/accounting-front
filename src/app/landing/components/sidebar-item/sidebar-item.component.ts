import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [CommonModule, MatIconModule, RouterModule, MatMenuModule, MatButtonModule],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() item!: NavItem;
  @Input() collapsed: boolean = false;

  expanded: boolean = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
