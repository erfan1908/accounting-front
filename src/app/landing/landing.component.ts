import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoPanelComponent } from "./components/info-panel/info-panel.component";
import { StuffManagmentComponent } from './components/stuff-managment/stuff-managment.component';

@Component({
  selector: 'landing',
   standalone: true,
  imports: [RouterOutlet, SidebarComponent, InfoPanelComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
