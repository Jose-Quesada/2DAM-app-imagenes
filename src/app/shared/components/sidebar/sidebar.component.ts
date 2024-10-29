import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor ( private gifsservice : GifsService) {}

  get tags (){
    return this.gifsservice.tagHistory;
  }

}
