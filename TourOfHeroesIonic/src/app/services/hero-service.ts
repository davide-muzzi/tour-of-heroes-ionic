import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find((h) => h.id === id);
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  deleteHero(id: number) {
    this.heroes = this.heroes.filter((h) => h.id !== id);
  }
}
