import { Component } from '@angular/core';
import { FormBuilder,  Validators,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {  FormGroup  } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.services';
// import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface Product {
  
  name: string;
  description: string;
  manufacturer: string;
  category: string;
  price: number;  
  quantity: number;
}


@Component({
  selector: 'app-productlist',
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,CommonModule],

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent {

  constructor(private router: Router) {}
  productlistForm!: FormGroup;
  submitted = false;
  displayedColumns: string[] = ['name', 'description','manufacturer', 'category','price', 'quantity','actions'];
  products: Product[] = [
    {  name: 'Dell Laptop',description:'Series Latittude 2400',manufacturer:'DELL Inc' , category: 'Electronics',price: 80000, quantity: 100 },
    {  name: 'iPhone 16 Pro',description:'Series for Professionals',manufacturer:'Apple Inc', category: 'Electronics', price: 200000, quantity: 50 },
    {  name: 'Lakme',description:'Cosmetic Product',manufacturer:'Lakme Inc', category: 'Cosmetic', price: 100, quantity: 20 },
    {  name: 'Ponds',description:'Cosmetic Product',manufacturer:'Ponds Inc', category: 'Cosmetic', price: 80, quantity: 34 }
  ];

  viewRow(row: any) {
    console.log('View:', row);
    alert(`Viewing Product with Name: ${row.name}`);
    // this.router.navigate(['productdetails-component']);
    
  }

  addRow() {
    // const newRow = { name: 'Mango',description:'Alphanso from Konan',manufacturer:'Kokan Agro',  category: 'Fruits',price: 200,quantity:44 };
    // this.products = [...this.products, newRow]; // Adding new row
    this.router.navigate(['addproduct-component']);
  }

  editRow(row: any) {
    console.log('Edit:', row);
    alert('Editing product with Name: ${row.name}');
  }

  deleteRow(row: any) {
    console.log('Delete:', row);
    this.products = this.products.filter(item => item.name !== row.name);
  }
}
