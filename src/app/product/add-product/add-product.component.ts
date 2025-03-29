import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm!: FormGroup;
  submitted: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      // id: [''], // Unique ID
      name: [''],
      description: [''],
      manufacturer: [''],
      category: [''],
      price: [''],
      quantity: ['']
    });
  }

  onSubmit() {
      this.submitted = true;  
      alert('Add Product Successful!');
      this.productForm.reset();
      this.submitted = false;
      // const newRow = { name: 'Mango',description:'Alphanso from Konan',manufacturer:'Kokan Agro',  category: 'Fruits',price: 200,quantity:44 };
      // this.products = [...this.products, newRow]; // Adding new row
      this.router.navigate(['productlists-component']);
  }
  

  back() {
    this.submitted = true; 
    alert('Redirecting to Login Page!');
    // Clear user session or authentication token (if used)
    localStorage.removeItem('userToken'); 
    this.router.navigate(['/productlist-component']);
  }

}
