import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input()
  img: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  tecnologies: string = '';
  @Input()
  repository: string = '';
  @Input()
  deploy: string = '';

  constructor() {}

  ngOnInit(): void {}
}
