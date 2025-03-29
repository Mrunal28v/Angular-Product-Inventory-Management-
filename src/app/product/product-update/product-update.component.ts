import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.services';

@Component({
  selector: 'app-product-update',
  imports: [],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{
  productForm!: FormGroup;
  productId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      manufacturer: [''],
      price: [''],
      quantity: ['']
    });

    // const product = this.productService.getProductById(this.productId);
    // if(product){  
    // this.productForm.patchValue(product);
    // }
    
  }

  // updateProduct(): void {
  //   this.productService.updateProduct(this.productId, this.productForm.value);
  //     this.router.navigate(['/inventory/product-detail', this.productId]);
  //   }
  
}
