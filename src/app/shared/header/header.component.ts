import { Component } from '@angular/core';
import {
  Collapse,
  Dropdown,
  initTWE,
} from "tw-elements";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ngOnInit() {
    initTWE({ Collapse, Dropdown });
  }
}
