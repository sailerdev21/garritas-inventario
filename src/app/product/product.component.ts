import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  newProduct: Product = { id: 0, name: '', category: '', quantity: 0, expirationDate: new Date(), price: 0 };

  @Output() productRegistered = new EventEmitter<Product>();

  onSubmit() {
    this.productRegistered.emit({ ...this.newProduct, id: this.generateId() });
    this.resetForm();
  }
  

  // Método para generar un ID único (puedes ajustar esto según tus necesidades)
  private generateId(): number {
    return Math.floor(Math.random() * 10000); // Ejemplo de generación de ID
  }

  // Método para reiniciar el formulario
  private resetForm() {
    this.newProduct = { id: 0, name: '', category: '', quantity: 0, expirationDate: new Date(), price: 0 };
  }
}
