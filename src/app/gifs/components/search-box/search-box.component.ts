import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchBox()"
      #txtTagInput
      >
  `,

})
export class SearchBoxComponent {

  @ViewChild ('txtTagInput')
  public tagInput !: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService){};


  searchBox( ) {
    const newTag = this.tagInput.nativeElement.value;

    this.gifService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';

    console.log({newTag});

  }
}
