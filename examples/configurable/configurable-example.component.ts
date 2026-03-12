import { Component } from '@angular/core';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-configurable-example',
  standalone: true,
  imports: [LayoutComponent, LayoutItemComponent],
  templateUrl: './configurable-example.component.html',
  styleUrls: ['./configurable-example.component.css']
})
export class ConfigurableExampleComponent {
  shell = {
    default: {
      templateColumns: '240px 1fr',
      templateRows: '64px 1fr 48px',
      templateAreas: '"header header"\n"sidebar content"\n"footer footer"'
    },
    sm: {
      templateColumns: '1fr',
      templateRows: '64px auto auto 48px',
      templateAreas: '"header"\n"content"\n"sidebar"\n"footer"'
    }
  };

  content = { default: { columns: 12, gap: '1rem' }, lg: { gap: '1.5rem' } };
}