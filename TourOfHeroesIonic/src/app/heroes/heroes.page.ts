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
    // placeholder – we’ll implement the Ionic Alert next
    console.log('Add hero clicked');
  }

  constructor(
    private heroService: HeroService,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
