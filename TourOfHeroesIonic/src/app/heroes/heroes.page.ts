import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { HeroService } from '../services/hero-service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonButtons,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class HeroesPage implements OnInit {
  heroes: Hero[] = [];

  async openAddHero() {
    const alert = await this.alertCtrl.create({
      header: 'Neuen Helden erstellen',
      inputs: [
        {
          name: 'id',
          type: 'number',
          placeholder: 'Id',
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: 'power',
          type: 'text',
          placeholder: 'Power (optional)',
        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
        },
        {
          text: 'Erstellen',
          handler: (data) => {
            if (!data.id || !data.name) {
              return false; // keeps alert open
            }

            this.heroService.addHero({
              id: Number(data.id),
              name: data.name,
              power: data.power,
            });

            // refresh list
            this.heroes = this.heroService.getHeroes();
            return true;
          },
        },
      ],
    });

    await alert.present();
  }

  constructor(
    private heroService: HeroService,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
