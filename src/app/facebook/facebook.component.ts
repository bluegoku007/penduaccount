import { Component, OnInit } from '@angular/core';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  produits=Catalogue;
  constructor() { }

  ngOnInit(): void {
  }

}
