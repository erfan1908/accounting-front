import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'info-panel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss',
})
export class InfoPanelComponent {
constructor(private auth: AuthService ,
    private router: Router
  ) {}

onLogout(): void {
        this.auth.logout();
      }


}
