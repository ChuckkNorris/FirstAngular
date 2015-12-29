import {Component} from 'angular2/core';
import {Hero} from '../hero';
@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: '/app/hero-detail/hero-Detail.view.html'
})
export class HeroDetailComponent {
    public hero: Hero;
}