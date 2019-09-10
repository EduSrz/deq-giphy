import { Component, OnInit } from '@angular/core'
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal'
import { GifDetailComponent } from '../../modals/gif-detail/gif-detail.component'
import { NgxMasonryOptions } from 'ngx-masonry'
import { GiphyService } from '../../services/giphy.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public trendingGifs: Array<any> = []
  public myOptions: NgxMasonryOptions = {}
  public loading: boolean = false
  public showGoUpButton: boolean = false
  public mainContainer: any
  public modalReference: BsModalRef

  constructor(private giphyService: GiphyService, private modalService: BsModalService) {}

  showGifDetails(details: any){
    let options: ModalOptions = {animated: true, class: 'modal-dialog-centered', ignoreBackdropClick: true, initialState: details}
    this.modalReference = this.modalService.show(GifDetailComponent, options);
  }

  listTrendingGifs() {
    this.mainContainer.style.scrollBehavior = 'smooth'
    this.mainContainer.style.overflowY = 'hidden'
    this.loading = true
    let offset = this.trendingGifs.length.toString()
    setTimeout(() => {
      this.giphyService.getTrendingGifs(offset).subscribe(response => {
        this.trendingGifs.push(...response.body.data)
        this.mainContainer.style.overflowY = 'scroll'
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

}