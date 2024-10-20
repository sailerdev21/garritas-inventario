import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { Product } from '../models/product.model';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  products: Product[] = [];
  productToEdit: Product | null = null;

  constructor() {
    this.loadInitialProducts();
  }

  // Método para cargar productos iniciales
  loadInitialProducts() {
    this.products = [
      { id: 1, name: 'Comida para perros', category: 'Comida', quantity: 50, expirationDate: new Date('2025-01-01'), price: 25.99 },
      { id: 2, name: 'Juguete para gatos', category: 'Juguetes', quantity: 30, expirationDate: new Date('2025-06-01'), price: 15.99 },
      { id: 3, name: 'Arena para gatos', category: 'Higiene', quantity: 20, expirationDate: new Date('2024-12-01'), price: 12.50 },
    ];
  }

  // Método para agregar productos
  addProduct(product: Product) {
    this.products.push({ ...product, id: this.products.length + 1 });
  }

  // Método para eliminar un producto
  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  // Método para seleccionar el producto a modificar
  editProduct(product: Product) {
    this.productToEdit = { ...product }; // Clona el producto para modificar
  }

  // Método para guardar los cambios en el producto
  updateProduct() {
    if (this.productToEdit) {
      const index = this.products.findIndex(p => p.id === this.productToEdit!.id);
      if (index !== -1) {
        this.products[index] = this.productToEdit;
        this.productToEdit = null; // Resetea el formulario
      }
    }
  }

  // Método para restar la cantidad del producto
  decreaseQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
      if (product.quantity < 6) {
        alert(`Atención: El producto ${product.name} tiene menos de 6 unidades en inventario.`);
      }
    } else {
      alert('No se puede restar más, la cantidad es 0.');
    }
  }
}



