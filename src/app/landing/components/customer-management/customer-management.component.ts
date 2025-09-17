import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';
import { CustomerCreateComponent } from "./components/customer-create/customer-create.component";
@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.scss'
})
export class CustomerManagementComponent {

}
