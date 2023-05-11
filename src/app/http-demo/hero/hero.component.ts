import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// interfaces
import { IHero } from '../interfaces/hero';

// services
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @ViewChild('heroForm') heroForm!: NgForm;
  public heroes: IHero[] = [];
  public updateId: string | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (response) => {
        console.log('GET\n', response);
        this.heroes = response;
      },
      error: (error) => {
        console.log('GET:\n', error);
      },
    });
  }

  public addHero(heroForm: NgForm): void {
    const hero = heroForm.value;
    this.heroService.addHero(hero).subscribe({
      next: (response) => {
        console.log('POST:\n', response);
        this.getHeroes();
        this.heroForm.reset();
      },
      error: (error) => {
        console.log('POST:\n', error);
      },
    });
  }

  public updateHero(heroForm: NgForm): void {
    const hero = heroForm.value;
    this.heroService.updateHero(<string>this.updateId, hero).subscribe({
      next: (response) => {
        console.log('PUT:\n', response);
        this.heroForm.reset();
        this.onCancelUpdate();
        this.getHeroes();
      },
      error: (error) => {
        console.log('PUT:\n', error);
      },
    });
  }

  public deleteHero(id: string | undefined): void {
    this.heroService.deleteHero(<string>id).subscribe({
      next: (response) => {
        console.log('DELETE\n', response);
        this.getHeroes();
      },
      error: (error) => {
        console.log('DELETE\n', error);
      },
    });
  }

  public onUpdateHero(id: string | undefined, hero: IHero): void {
    this.updateId = <string>id;
    this.heroForm.setValue({
      heroName: hero.heroName,
      realName: hero.realName,
      power: hero.power,
      isAvenger: hero.isAvenger,
    });
  }

  public onCancelUpdate(): void {
    this.updateId = null;
    this.heroForm.reset();
  }
}
