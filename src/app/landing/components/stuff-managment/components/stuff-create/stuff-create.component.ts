import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TabsGroupComponent } from '../../../tabs-group/tabs-group.component';
@Component({
  selector: 'stuff-create',
  standalone: true,
  imports: [RouterModule,TabsGroupComponent],
  templateUrl: './stuff-create.component.html',
  styleUrl: './stuff-create.component.scss'
})
export class StuffCreateComponent {

}
