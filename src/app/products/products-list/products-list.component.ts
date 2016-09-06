import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'
import {IProduct} from '../products'
import {ProductsService} from '../products.service'
import {StarComponent} from '../../shared/star.component'
@Component({
	selector: 'app-products-list',
	templateUrl: '/app/products/products-list/products-list.component.html',
	styleUrls: ['/app/products/products-list/products-list.component.css'],
	directives: [StarComponent,ROUTER_DIRECTIVES],
	providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
	pageTitle: string = "Product List";
	imageWidth: number = 50
	imageMargin: number = 2
	showImage: boolean = false
	listFilter: string
	errorMessage: string
	products: IProduct[] 
	
 constructor(private _productService: ProductsService){}
 toggleImage(): void {
		this.showImage = !this.showImage
	}
  ngOnInit() : void   {
  	this._productService.getProducts()
		.subscribe(
			products => this.products = products,
			error 	 => this.errorMessage = <any>error)
	}
	  onRatingClicked(message: string): void {
        this.pageTitle = "Product List " + message ;
    }

}
