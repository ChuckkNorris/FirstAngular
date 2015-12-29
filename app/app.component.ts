import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero-service/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.view.html',
    styleUrls: ['app/app.style.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    constructor(private _heroService: HeroService, private _http: Http) { }
    ngOnInit() {
        this.getHeroes();
        
    } 
    public selectedHero:Hero;
    public heroes: Hero[];
    public title = 'Tour of Heroes';
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        
    }
    keyUp() {
        alert("YOU PRESSED ENTER");
    }
}