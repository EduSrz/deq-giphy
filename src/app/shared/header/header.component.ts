import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchForm: FormGroup

  constructor(public formBuilder: FormBuilder, private route: Router) {
    this.searchForm = this.formBuilder.group({
      keyword: ['', Validators.required]
    });
  }

  reDirect() {
    if(this.searchForm.valid) {
      this.route.routeReuseStrategy.shouldReuseRoute = function(){return false}
      this.route.navigateByUrl(`search/${this.searchForm.controls.keyword.value}`, {skipLocationChange: true}).then(() => {
        this.route.navigated = false;
        this.route.navigate([`search/${this.searchForm.controls.keyword.value}`]);
      });
    }
  }

}
