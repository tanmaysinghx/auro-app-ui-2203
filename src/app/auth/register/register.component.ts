import { Component } from '@angular/core';
import { Tooltip, initTWE, Input, Ripple } from 'tw-elements';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  ngOnInit() {
    initTWE({ Tooltip, Input, Ripple });
  }

}
