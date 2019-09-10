import { Component, OnInit } from '@angular/core'
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

  public details: any

  constructor(private modalOptions: ModalOptions, public modalRef: BsModalRef) { }

  ngOnInit() {
    if(this.modalOptions.initialState) {
      this.details = this.modalOptions.initialState
    }
  }

}
