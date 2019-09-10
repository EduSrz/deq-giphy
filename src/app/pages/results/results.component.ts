import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal'
import { GifDetailComponent } from '../../modals/gif-detail/gif-detail.component'
import { NgxMasonryOptions } from 'ngx-masonry'
import { GiphyService } from '../../services/giphy.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public results: Array<any> = []
  public myOptions: NgxMasonryOptions = {}
  public loading: boolean = false
  public showGoUpButton: boolean = false
  public mainContainer: any
  public modalReference: BsModalRef
  public keyword: string = ''

  constructor(private giphyService: GiphyService, private modalService: BsModalService, private route: ActivatedRoute) {}

  showGifDetails(details: any){
    let options: ModalOptions = {animated: true, class: 'modal-dialog-centered', ignoreBackdropClick: true, initialState: details}
    this.modalReference = this.modalService.show(GifDetailComponent, options);
  }

  listMatchGifs() {
    this.mainContainer.style.scrollBehavior = 'smooth'
    this.mainContainer.style.overflowY = 'hidden'
    this.loading = true
    let offset = this.results.length.toString()
    setTimeout(() => {
      this.giphyService.searchGifs(offset, this.keyword).subscribe(response => {
        this.results.push(...response.body.data)
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
    this.route.params.subscribe(params => {
      this.keyword = params.keyword
    })
    this.mainContainer = document.getElementById('main')
    this.listMatchGifs()
  }

}
