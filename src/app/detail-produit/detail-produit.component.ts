import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {
  @Input() produit: { produit: string, description: string, prix: number, imageUrl: string } | null = null;

}
