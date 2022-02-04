import { Component, OnInit } from '@angular/core';
import { Catalogue } from './catalogue';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  produits=Catalogue
  constructor() { }

  ngOnInit(): void {
  }

}
