import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', 'projects.component.responsive.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const categoriasElement = document.getElementById('categorias');
    if (categoriasElement) {
      categoriasElement.addEventListener(
        'change',
        this.onCategoryChange.bind(this)
      );
    }
  }

  private onCategoryChange(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    console.log('Categoria selecionada:', category);

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      if (category === 'todos') {
        card.classList.remove('hidden');
      } else {
        if (card.classList.contains(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  }
}
