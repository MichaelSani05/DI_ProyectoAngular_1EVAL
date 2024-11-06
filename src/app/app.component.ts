import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';
import { FilterService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FilterService]
})
export class AppComponent {
  title = 'ejemploAngular1';
  
  public houses: Array<any> = [
    {id:"1", titulo: "Luxury Modern Villa", location: "Valencia", price: 633000, image: "house-1.jpeg", type: "Apartment", category: "Buy", style: "Minimalist"},
    {id:"2", titulo: "Luxury PentHouse", location: "Madrid", price: 483000, image: "house-2.jpeg", type: "Chalet", category: "Buy", style: "Modern"},
    {id:"3", titulo: "Confortable Bungalow", location: "Barcelona", price: 575000, image: "house-3.jpeg", type: "Dúplex", category: "Rent", style: "Abstract"}
  ]

  public houses2: Array<any> = [
    {id: "1", titulo: "Luxury Modern Villa", location: "Valencia", price: 633000, image: "house-1.jpeg", type: "Apartment", category: "Buy", style: "Minimalist"},
    {id: "2", titulo: "Luxury PentHouse", location: "Madrid", price: 483000, image: "house-2.jpeg", type: "Chalet", category: "Buy", style: "Modern"},
    {id: "3", titulo: "Comfortable Bungalow", location: "Barcelona", price: 575000, image: "house-3.jpeg", type: "Dúplex", category: "Rent", style: "Rustic"},
    {id: "4", titulo: "Beachfront Condo", location: "Malaga", price: 520000, image: "house-4.jpeg", type: "Apartment", category: "Rent", style: "Coastal"},
    {id: "5", titulo: "Rustic Country House", location: "Barcelona", price: 350000, image: "house-5.jpeg", type: "House", category: "Rent", style: "Abstract"},
    {id: "6", titulo: "Modern Studio Loft", location: "Madrid", price: 415000, image: "house-6.jpeg", type: "Studio", category: "Rent", style: "Modern"},
    {id: "7", titulo: "Mountain Cabin Retreat", location: "Sevilla", price: 300000, image: "house-7.jpeg", type: "Chalet", category: "Buy", style: "Minimalist"},
    {id: "8", titulo: "Elegant Townhouse", location: "Malaga", price: 560000, image: "house-8.jpeg", type: "Dúplex", category: "Buy", style: "Minimalist"},
    {id: "9", titulo: "Modern Family Home", location: "Valencia", price: 620000, image: "house-9.jpeg", type: "House", category: "Buy", style: "Rustic"},
  ];

  locations: Array<any> = [
    {id: "1", name: "Valencia"},
    {id: "2", name: "Madrid"},
    {id: "3", name: "Barcelona"},
    {id: "4", name: "Malaga"},
    {id: "5", name: "Sevilla"}
  ]

  types: Array<any> = [
    {id: "1", name: "Apartment"},
    {id: "2", name: "Chalet"},
    {id: "3", name: "Dúplex"},
    {id: "4", name: "House"},
    {id: "5", name: "Studio"}
  ]

  categories: Array<any> = [
    {id: "1", name: "Buy"},
    {id: "2", name: "Rent"}
  ]

  styles: Array<any> = [
    {id: "1", name: "Minimalist"},
    {id: "2", name: "Modern"},
    {id: "3", name: "Abstract"},
    {id: "4", name: "Coastal"},
    {id: "5", name: "Rustic"}
  ]


  filteredData: Array<any> = [];

  selectedType: string = '';
  selectedCategory: string = '';
  selectedLocation: string = '';
  selectedStyle: string = '';

  ngOnInit() {
    this.filteredData = this.houses2;
  }

  filterData() {
    this.filteredData = this.houses2.filter(house => {
      return (
        (this.selectedType ? house.type === this.selectedType : true) &&
        (this.selectedCategory ? house.category === this.selectedCategory : true) &&
        (this.selectedLocation ? house.location === this.selectedLocation : true) &&
        (this.selectedStyle ? house.style === this.selectedStyle : true)
      );
    });
  }

}
