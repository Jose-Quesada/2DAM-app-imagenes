import { Component } from '@angular/core';
import { GifsService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor ( private gifsService: GifsService) {}

  get gifs (): Gif[] {
    return this.gifsService.gifList;
  }
}
