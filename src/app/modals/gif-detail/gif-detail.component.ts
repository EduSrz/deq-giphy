import { Component, OnInit } from '@angular/core'
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

  public details: any

  constructor(private modalOptions: ModalOptions, public modalRef: BsModalRef, public modalService: BsModalService, private location: PlatformLocation) { }

  close() {
    this.modalRef.hide()
    this.modalService.hide(1)
    this.location.onPopState(() => this.modalService.hide(1))
  }

  ngOnInit() {
    if(this.modalOptions.initialState) {
      this.details = this.modalOptions.initialState
    }
  }

}
