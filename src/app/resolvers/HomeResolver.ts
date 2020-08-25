import {Injectable} from '@angular/core';
import {SuperheroService} from '../services/superhero.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {SuperheroResponse} from '../domain/superhero';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {

  constructor(private superheroService: SuperheroService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const superheroId = route.queryParams.superhero ? route.queryParams.superhero : '70';
    return this.superheroService.getSuperHeroById(superheroId);
  }
}
