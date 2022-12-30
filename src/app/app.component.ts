/** Angular */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

/** Services */
import { DatabaseService } from './core/services/backend/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(
    private cPlatform: Platform,
    private cDataBaseService: DatabaseService
  ) {
    this.cPlatform.ready()
      .then(() => {
        this.cDataBaseService.createDataBase();
      });
  }
}
