import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

const BASE_URL = environment.giphyEndPoint
const API_KEY = environment.giphyApiKey
const USER_ID = localStorage.getItem('user_id')

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  public getTrendingGifs(offset: string) {
    return this.http.get<any>(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit: '13',
        offset: offset,
        random_id: USER_ID
      },
      observe: 'response',
      responseType: "json"
    })
  }

  public searchGifs(offset: string, keyWord: string) {
    return this.http.get<any>(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: keyWord,
        limit: '13',
        offset: offset,
        random_id: USER_ID
      },
      observe: 'response',
      responseType: "json"
    })
  }

  public getFavoritesGifs(favoritesGifsId: string) {
    return this.http.get<any>(BASE_URL, {
      params: {
        api_key: API_KEY,
        ids: favoritesGifsId,
        random_id: USER_ID
      },
      observe: 'response',
      responseType: "json"
    })
  }

}
