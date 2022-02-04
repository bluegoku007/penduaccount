import { Component, OnInit } from '@angular/core';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})
export class TiktokComponent implements OnInit {
  produits=Catalogue;
  constructor() { }

  ngOnInit(): void {
  }

}
