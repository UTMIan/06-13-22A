import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {



@Input()
  cardTitle: string = "Default title"

@Input()
  description: string = "Default description"

@Input()
  image: string = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"

  constructor() { }

  ngOnInit(): void {
  }

}
