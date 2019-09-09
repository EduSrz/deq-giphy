import { Component, OnInit } from '@angular/core'
import { GiphyService } from '../../services/giphy.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public trendingGifs: Array<any> = []
  public selector: string = '.container'

  constructor(private giphyService: GiphyService) { }

  listTrendingGifs() {
    let offset = this.trendingGifs.length.toString()
    this.giphyService.getTrendingGifs(offset).subscribe(response => {
      this.trendingGifs = [...this.trendingGifs, ...response.body.data]
      console.log(this.trendingGifs)
    }, error => {
      console.error(error)
    })
  }

  ngOnInit() {
    this.listTrendingGifs()
  }

}
