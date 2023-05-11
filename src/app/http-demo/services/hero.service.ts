import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { IHero } from '../interfaces/hero';

@Injectable()
export class HeroService {
  private _baseUrl: string = env.baseUrl;

  constructor(private _http: HttpClient) {}

  public getHeroes(): Observable<IHero[]> {
    return this._http.get(this._baseUrl + 'heroes.json').pipe(
      map((res: { [k: string]: any }) => {
        const heroList: any = [];
        Object.keys(res).forEach((id) => {
          let val: any = res[id];
          let obj = { id, ...val };
          heroList.push(obj);
        });
        return heroList;
      })
    );
  }

  public addHero(hero: IHero): Observable<any> {
    return this._http.post(this._baseUrl + 'heroes.json', hero);
  }

  public updateHero(id: string, hero: IHero): Observable<any> {
    return this._http.put(this._baseUrl + `heroes/${id}.json`, hero);
  }

  public deleteHero(id: string): Observable<any> {
    return this._http.delete(this._baseUrl + `heroes/${id}.json`);
  }
}
