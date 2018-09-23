import { Component, OnInit } from '@angular/core';

declare var jQuery: any

@Component({
  selector: 'authorized-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.dropdown').on('show.bs.dropdown', function (e) {
      jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    jQuery('.dropdown').on('hide.bs.dropdown', function (e) {
      jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });
  }

}
