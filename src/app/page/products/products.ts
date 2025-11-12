import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Productos } from '../../servicios/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  productos: any[] = [];

  constructor(private productService: Productos) {
    this.productos = this.productService.getProductos();
  }
}
