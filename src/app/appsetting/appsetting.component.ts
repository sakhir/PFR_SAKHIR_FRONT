import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
 
@Component({
  selector: 'app-appsetting',
  templateUrl: './appsetting.component.html',
  styleUrls: ['./appsetting.component.css']
})
export class AppsettingComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  triggerScrollTo() {
    
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
 
    this.scrollToService.scrollTo(config);
  }

}
