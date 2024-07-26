import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';


@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailProduitComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  produit!: string;
  description!: string;
  prix!: number;
  imageUrl!: string;

  produits: { produit: string, description: string, prix: number, imageUrl: string }[] = [];
  selectedProduit: { produit: string, description: string, prix: number, imageUrl: string } | null = null;


  ngOnInit(): void{
    this.produit='Panier de fruit';
    this.description='les meilleurs paniers de fruit se vendent ici ';
    this.prix= 2500;
    this.imageUrl= 'https://i.pinimg.com/564x/0d/88/62/0d88626a422b24ea390e7c4eea6d1ecd.jpg'
  }

  onAddProduit(): void {
    const newProduit = {
      produit: this.produit,
      description: this.description,
      prix: this.prix,
      imageUrl: this.imageUrl
    };
    this.produits.push(newProduit);
    this.clearForm();
  }
  clearForm(): void {
    this.produit = '';
    this.description = '';
    this.prix = 0;
    this.imageUrl = '';
  }

  onSelectProduit(produit: { produit: string, description: string, prix: number, imageUrl: string }): void {
    this.selectedProduit = produit;
  }
}
