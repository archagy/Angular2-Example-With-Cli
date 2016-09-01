import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit {
	pageTitle: string = "Product List";
	
  constructor() { }

  ngOnInit() {
  }

}
