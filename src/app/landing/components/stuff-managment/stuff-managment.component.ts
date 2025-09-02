import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'stuff',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './stuff-managment.component.html',
  styleUrl: './stuff-managment.component.scss'
})
export class StuffManagmentComponent {

}
