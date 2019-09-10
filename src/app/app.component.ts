import { Component, OnInit } from '@angular/core'
import { RandomUidService } from './services/random-uid.service'

const USER_ID = localStorage.getItem('user_id')

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(public idService: RandomUidService) {}

  ngOnInit() {
    if(USER_ID === null) {
      this.idService.getUserId().subscribe(response => {
        localStorage.setItem('user_id', response.body.data.random_id)
      }, error => console.error(error))
    }
  }

}