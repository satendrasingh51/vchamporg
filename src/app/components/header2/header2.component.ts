import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
