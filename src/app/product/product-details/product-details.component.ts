import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product-details',
  imports: [RouterLink,RouterOutlet,FormsModule, ReactiveFormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent  {
  // product: any;

  // constructor(private route: ActivatedRoute, private productService: ProductService) {}

  // ngOnInit(): void {
  //   const productId = this.route.snapshot.paramMap.get('id');
  //   if (productId) {
  //     // this.productService.getProductById(productId);
  //     };
  //   }

    @Input() ProductListComponent!: ProductListComponent;
  router: any;

    addRow() {
      this.router.navigate(['addproduct-component']);
    }
}


