import { Injectable, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class FilterServiceDemo implements OnInit {

  constructor(private filterService: FilterService) {}

  ngOnInit() {

  }
  
}
