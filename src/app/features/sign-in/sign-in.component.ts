import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputOtp } from 'primeng/inputotp';

@Component({
  selector: 'app-sign-in',
  imports: [CardModule, ButtonModule, InputTextModule, InputOtp],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
