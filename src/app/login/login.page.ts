import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';
import { StorageService } from "../service/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  data: any = {};

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private router: Router,
    public storageService: StorageService
  ) {}

  ngOnInit() {
    this.data.numero_cliente = '';
  }

  ingresar()
  {
    this.http.post(`${environment.apiCarrito}login`,{
      code_user: this.data.numero_cliente
    }).subscribe({
      next: data => {
        this.storageService.setObject('user_data', data).then(result => {
          this.router.navigate(['home']);
        }).catch(e => {

          this.alertModal("No se pudo crear la sesion");
        });
      },
      error: error => {
        this.alertModal(error.error);
      }
    });
  }

  async alertModal(message = '') {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

  }

}
