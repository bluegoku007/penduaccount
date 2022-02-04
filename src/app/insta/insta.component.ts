import { Component, OnInit } from '@angular/core';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent implements OnInit {
  title="Produit";
  produits=Catalogue;
  constructor() { }

  ngOnInit(): void {
  }

}
