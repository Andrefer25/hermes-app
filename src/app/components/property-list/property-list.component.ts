import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  extranjeras: boolean = false;

  constructor(private activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.extranjeras = params.get('extranjeras')? true : false ;
      console.log(this.extranjeras);
    })
  }

}
