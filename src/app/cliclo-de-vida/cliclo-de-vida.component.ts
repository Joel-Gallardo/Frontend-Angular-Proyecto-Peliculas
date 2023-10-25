import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-cliclo-de-vida',
  templateUrl: './cliclo-de-vida.component.html',
  styleUrls: [ './cliclo-de-vida.component.css' ]
})
export class ClicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  @Input()
  titulo: string;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;

  timer: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('do changes');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer)
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterViewInit(): void {
    console.log('on after view');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }

}
