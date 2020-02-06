import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import {Router, ActivatedRoute} from '@angular/router';
import {Keyboard} from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private translate: TranslateService,
      private router: Router,
      private storage: Storage,
      private route: ActivatedRoute,
      private keyboard: Keyboard) {}



  onFocus() {
    console.log('focus search bar');

  }

  onInput(event: any) {
    this.router.navigate(['test1'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    if (this.keyboard.isVisible) {
      this.keyboard.hide();
    }
  }


}
