import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { SearchResponse,Gif } from '../interfaces/gif.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = '9sRmUi7HCk50jblcNpzwSn4IE5hyi04t';
  private serviceUrl:   string = 'Http://api.giphy.com/v1/gifs';

  public gifList: Gif [] = [];

  constructor(private http: HttpClient) {
     }



  get tagHistory () {
    return [...this._tagsHistory];
  }

  public organizedHistory (tag: string){

    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter ( (oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift ( tag ) ;

    this._tagsHistory = this._tagsHistory.splice(0,10);


  }

  public searchTag ( tag:string):void {

    const params = new HttpParams()
      .set ('api_key', this.apiKey)
      .set ('limit', '10')
      .set ('q', tag)


    if (tag.length === 0) return;

    this.organizedHistory (tag);

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe ( (resp) => {
        this.gifList = resp.data
        console.log({gifs: this.gifList});
      })
  }

}
