// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Cambia esto según tu lógica de autenticación

  login(username: string, password: string): boolean {
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      this.loggedIn = true; // Cambia esto si la autenticación es exitosa
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
