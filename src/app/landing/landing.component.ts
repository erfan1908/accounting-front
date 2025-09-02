import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoPanelComponent } from "./components/info-panel/info-panel.component";
import { StuffManagmentComponent } from './components/stuff-managment/stuff-managment.component';

// import { LandingService } from './services/landing.service';
// import { ICompany, IlandingRouter } from './models/landing.models';
// import { LoginSignalService } from '../login/services/login-signal.service';

@Component({
  selector: 'landing',
   standalone: true,
  imports: [RouterOutlet, SidebarComponent, InfoPanelComponent,StuffManagmentComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
