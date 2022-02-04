import { Component, OnInit } from '@angular/core';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit {
  produits=Catalogue;
  constructor() { }

  ngOnInit(): void {
  }

}
