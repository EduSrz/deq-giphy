import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

const BASE_URL = environment.giphyEndPoint
const API_KEY = environment.giphyApiKey

@Injectable({
  providedIn: 'root'
})
export class RandomUidService {

  constructor(private http: HttpClient) { }

  public getUserId() {
    return this.http.get<any>(`${BASE_URL}/randomid`, {
      params: {api_key: API_KEY},
      observe: 'response',
      responseType: "json"
    })
  }
}