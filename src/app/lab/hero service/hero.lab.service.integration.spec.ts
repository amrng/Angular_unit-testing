import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe('3-hero service (http) integration testing:', () => {
  let heroService: HeroServiceForLab;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });

    heroService = TestBed.inject(HeroServiceForLab);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('getHeroes function: send request and receive response successfully', () => {
    const dummyHeroes: Hero[] = [
      { id: 1, name: 'Hero 1' },
      { id: 2, name: 'Hero 2' },
    ];

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes');
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('updateHero function: send request and receive response successfully', () => {
    const heroToUpdate: Hero = { id: 1, name: 'Updated Hero' };

    heroService.updateHero(heroToUpdate).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/heroes');
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
