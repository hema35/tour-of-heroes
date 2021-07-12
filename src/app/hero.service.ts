import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroesFromService() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.msgSer.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.msgSer.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private msgSer: MessageService) { }
}