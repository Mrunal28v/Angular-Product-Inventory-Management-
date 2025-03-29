import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.services';

@Component({
  selector: 'app-product',
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productForm!: FormGroup;
  submitted = false;
  onClick() {
    this.submitted = true;
   
   // if (this.registrationForm.valid)      
      console.log('Product added Successfully', this.productForm.value);
   alert(this.productForm.getRawValue);
      // alert('Registration Successful!');
      this.productForm.reset();
      this.submitted = false;
   // }
  }
  // products: any[] = [];

  constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.products = this.productService.getProducts();
  // }

  // deleteProduct(index: number) {
  //   this.productService.deleteProduct(index);
  // }

}
