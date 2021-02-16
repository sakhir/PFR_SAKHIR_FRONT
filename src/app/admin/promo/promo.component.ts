import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  selectedFile :File |any;
  constructor() { }

  ngOnInit(): void {
  }

  url:any;
  selectImage(event:any) {
   this.selectedFile=<File>event.target.files[0];
   var reader= new FileReader();
   reader.readAsDataURL(event.target.files[0]);
   reader.onload=(event)=>{
    this.url=event.target!.result;
   }
  }

}
