import { Component } from '@angular/core';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-customized-example',
  standalone: true,
  imports: [LayoutComponent, LayoutItemComponent],
  templateUrl: './customized-example.component.html',
  styleUrls: ['./customized-example.component.css']
})
export class CustomizedExampleComponent {}