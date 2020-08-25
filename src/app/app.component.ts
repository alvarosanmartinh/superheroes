import {Component, OnInit} from '@angular/core';
import {SuperheroResponse} from './domain/superhero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'superheroes';
  data: any;
  superheroResponse: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data: {
    //   superheroResponse: SuperheroResponse
    // }) => {
    //   console.log(data);
    //   this.superheroResponse = data.superheroResponse;
    // });
    this.superheroResponse = this.activatedRoute.snapshot.data;
  }

}
