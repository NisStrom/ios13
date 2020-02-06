import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'not-home.page.html',
  styleUrls: ['not-home.page.scss'],
})

export class NotHomePage {

  constructor(private translate: TranslateService,
      private storage: Storage) {}


}
