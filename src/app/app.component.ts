import { Component } from '@angular/core';
import { ProduitComponent } from './produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProduitComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedProduit: any;
}
