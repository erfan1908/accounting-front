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

    // چک کن ببین روی یکی از بچه‌های دیگر هستیم
    return parent.children.some(
      (c: any) => c.link !== child.link && this.router.url.includes(c.link)
    );
  }

toggleExpand(navItem: any) {
this.expanded = !this.expanded;
  // if (!this.LandingApiService.currentExpanded && !this.LandingApiService.lastExpanded) {
  //   this.LandingApiService.currentExpanded = navItem.name;
  //   this.LandingApiService.lastExpanded = navItem.name;
  //     this.expanded = !this.expanded;
  //   console.log("if current is empty = ", this.LandingApiService.currentExpanded);
  // } 
  // if(this.LandingApiService.currentExpanded === navItem.name){
  //   this.expanded = !this.expanded;
  // }
  // if(navItem !== this.LandingApiService.lastExpanded ){
  //       console.log("lastExpanded = ", this.LandingApiService.lastExpanded);
  // }
  
  // else {
  //   console.log("not empty");
  //   this.LandingApiService.lastExpanded = this.LandingApiService.currentExpanded;
  //   this.LandingApiService.currentExpanded = navItem.name;
  // }
}



  // toggleExpand(navItem:any) {
  //   this.expanded = !this.expanded;

    
  //   if(this.currentExpanded === null && this.lastExpanded === null ){
  //     this.currentExpanded = navItem.name;
  //     this.lastExpanded = navItem.name;
  //     console.error("if current is empty = " , this.currentExpanded);
  //     console.error("if lastExpanded is empty = " , this.currentExpanded);
  //   }else{
  //     console.error("not empty  " );
  //   }


  //   // console.error("first time currentExpanded= " , this.currentExpanded);
  //   // if(navItem.name === this.currentExpanded){
  //   //   console.error("currentExpanded= " , navItem.name);
  //   // }else{
  //   //   console.error("sameeee" );
  //   // }
  //   }
    
    // if(!this.currentExpanded && !this.lastExpanded ){
    //      this.currentExpanded =this.navItem.name;
    //      this.lastExpanded =this.navItem.name;
    //      console.error("first currentExpanded= " , this.currentExpanded , "first lastExpanded = " ,this.lastExpanded);
    // }else if(this.currentExpanded === navItem.name){
    //     console.log("same");
    // }
 
    // this.lastExpanded =this.navItem.name;
    // console.error("currentExpanded= " , navItem.name , "lastExpanded = " ,navItem.name);
  }

