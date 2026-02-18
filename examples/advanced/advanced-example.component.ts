import { Component } from '@angular/core';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-advanced-example',
  standalone: true,
  imports: [LayoutComponent, LayoutItemComponent],
  templateUrl: './advanced-example.component.html',
  styleUrls: ['./advanced-example.component.css']
})
export class AdvancedExampleComponent {
  layout = {
    default: { columns: 12, gap: '1rem' },
    md: { columns: 8 },
    lg: { columns: 12, gap: '1.5rem' },
    xl: { gap: '2rem' }
  };

  regions = [
    { name: 'header', content: 'Header' },
    { name: 'sidebar', content: 'Sidebar' },
    { name: 'content', content: 'Content' },
    { name: 'footer', content: 'Footer' }
  ];

  areas = `"header header"\n"sidebar content"\n"footer footer"`;

  items = [
    { title: 'A', span: 3 },
    { title: 'B', span: 3 },
    { title: 'C', span: 6 }
  ];
}