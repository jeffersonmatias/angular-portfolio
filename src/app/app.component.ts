import { Component, AfterViewInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-portfolio';

  private scroll: LocomotiveScroll | undefined;

  ngAfterViewInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('#element_scroll') as HTMLElement,
      smooth: true,
    });
  }
}
