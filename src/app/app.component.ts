import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploAngular1';
  
  public houses: Array<any> = [
    {titulo: "Luxury Modern Villa", location: "Coasted City", price: 633000, image: "house-1.jpeg"},
    {titulo: "Luxury PentHouse", location: "Florida", price: 483000, image: "house-2.jpeg"},
    {titulo: "Confortable Bungalow", location: "California", price: 575000, image: "house-3.jpeg"}
  ]

}
