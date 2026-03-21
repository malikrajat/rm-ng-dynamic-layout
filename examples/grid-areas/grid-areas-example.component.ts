import { Component } from '@angular/core';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-grid-areas-example',
  standalone: true,
  imports: [LayoutComponent, LayoutItemComponent],
  templateUrl: './grid-areas-example.component.html',
  styleUrls: ['./grid-areas-example.component.css']
})
export class GridAreasExampleComponent {
  config = {
    templateAreas: `
      'header header header'
      'nav main widgets'
      'footer footer footer'
    `,
    templateColumns: '200px 1fr 250px',
    templateRows: 'auto 1fr auto',
    gap: '1rem'
  };

  mobileConfig = {
    templateAreas: `
      'header'
      'nav'
      'main'
      'widgets'
      'footer'
    `,
    templateColumns: '1fr',
    templateRows: 'auto auto 1fr auto auto',
    gap: '0.75rem'
  };
}