import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unauthorized-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class UHeaderComponent implements OnInit {

  isAuth: Boolean = !!localStorage.getItem('authDto')

  constructor() { }

  ngOnInit() {
  }

}
