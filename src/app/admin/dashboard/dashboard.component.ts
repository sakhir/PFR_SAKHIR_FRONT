import { Component, Input, OnInit } from '@angular/core';
import { Profils } from 'src/app/Models/Profil/Profil';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() profils:Profils|any

  constructor() { }

  ngOnInit(): void {
    
  }

}
