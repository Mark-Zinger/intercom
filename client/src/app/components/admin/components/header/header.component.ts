import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: { label: string, url: string }[] = [
    { label: 'Клиенты', url: 'clients'},
    { label: 'Заявки', url: 'requests'},
    { label: 'Работники', url: 'workers'},
    { label: 'Статистика', url: 'statistic'},
  ]

  activeLink!: string;

  constructor( public router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.activeLink = event.url.split('/').reverse()[0];
      }
    })
  }

}


