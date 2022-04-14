import { Component } from "@angular/core";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  title: string = "Metallica Rules";
  content: string = "something goes here";
  isTechRelated: boolean = true

  constructor() {

  }

}
