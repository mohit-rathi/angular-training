import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { environment as env } from 'src/environments/environment.development';
import { IHero } from '../interfaces/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @ViewChild('heroForm') heroForm!: NgForm;
  public heroes: IHero[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes() {
    this.http
      .get(env.baseUrl + 'heroes.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const heroList: any = [];
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            heroList.push(obj);
          });
          // for (const key in res) {
          //   if (res.hasOwnProperty(key)) {
          //     heroList.push({ ...res[key], id: key });
          //   }
          // }
          return heroList;
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.heroes = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  public addHero(heroForm: NgForm): void {
    const hero = heroForm.value;
    this.http.post(env.baseUrl + 'heroes.json', hero).subscribe({
      next: (response) => {
        console.log(response);
        this.heroForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
