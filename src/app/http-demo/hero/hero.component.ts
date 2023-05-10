import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment as env } from 'src/environments/environment.development';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(private http: HttpClient) {}

  public addHero(heroForm: NgForm): void {
    const hero = heroForm.value;
    this.http.post(env.baseUrl + 'heroes.json', hero).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
