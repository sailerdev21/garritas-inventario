export interface Product {
  id: number;             // Identificador único para el producto
  name: string;           // Nombre del producto
  category: string;       // Categoría a la que pertenece el producto
  quantity: number;       // Cantidad disponible en inventario
  price: number;          // Precio del producto
  expirationDate: Date;   // Fecha de caducidad del producto (si aplica)
}
