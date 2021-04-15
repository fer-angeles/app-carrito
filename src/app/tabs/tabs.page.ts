import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import { StorageService } from "../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    private router: Router,
    public storageService: StorageService
  ) {}


  salir()
  {
    this.storageService.clear();
    this.router.navigate(['login']);
    /*this.storageService.clear().then(result => {
      this.router.navigate(['login']);
    }).catch(e => {
      this.alertModal("No se pudo borrar la sesion");
    });*/
  }
}
