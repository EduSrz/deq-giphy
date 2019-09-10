import { Component, OnInit } from '@angular/core'
import { NgxMasonryOptions } from 'ngx-masonry'
import { GiphyService } from '../../services/giphy.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  /* host: {"window:scroll": '$event'} */
})

export class HomeComponent implements OnInit {

  public trendingGifs: Array<any> = []
  public myOptions: NgxMasonryOptions = {}
  public loading: boolean = false
  public showGoUpButton: boolean = false
  public mainContainer: any

  constructor(private giphyService: GiphyService) {}

  listTrendingGifs() {
    this.mainContainer.style.scrollBehavior = 'smooth'
    this.mainContainer.style.overflowY = 'hidden'
    this.loading = true
    let offset = this.trendingGifs.length.toString()
    setTimeout(() => {
      this.giphyService.getTrendingGifs(offset).subscribe(response => {
        this.trendingGifs.push(...response.body.data)
        this.mainContainer.style.overflowY = 'scroll'
        /* console.log(this.trendingGifs) */
      }, error => {
        this.loading = false
        console.error(error)
      })
    }, 750)
  }

  onMasonryScroll() {
    this.mainContainer.scrollTop < 400 ? this.showGoUpButton = false : this.showGoUpButton = true
  }

  scrollTop() {
    this.mainContainer.scrollTo(0,0)
  }

  ngOnInit() {
    this.myOptions = {
      resize: true,
      fitWidth: true,
      initLayout: true,
      horizontalOrder: true,
      itemSelector: '.masonry-item',
      transitionDuration: '0.5s'
    }
    this.mainContainer = document.getElementById('main')
    this.listTrendingGifs()
  }

  ngOnDestroy() {
  }
}
