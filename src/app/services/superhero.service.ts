import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SuperheroResponse} from '../domain/superhero';
import {apiConstants} from '../core/constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSuperHeroById(id: string): Observable<any> {
    return this.http.get(apiConstants.urlWithToken + '/' + id);
  }
}
