import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent, LayoutItemComponent } from 'rm-ng-dynamic-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LayoutItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RM Angular Dynamic Layout');
  protected currentTheme = signal<'light' | 'dark'>('light');
  protected activeSection = signal('hero');

  toggleTheme() {
    this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
  }

  scrollToSection(sectionId: string) {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Demo data for showcase
  protected readonly features = [
    {
      icon: '🎯',
      title: 'Content-Agnostic',
      description: 'Works with any content - no assumptions about charts, cards, or components'
    },
    {
      icon: '🏗️',
      title: 'CSS Grid Based',
      description: 'Modern, powerful layout system with zero JavaScript overhead'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: '90+ utility classes for mobile-first responsive design'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: '35+ CSS variables for complete styling control'
    },
    {
      icon: '🌳',
      title: 'Tree-Shakable',
      description: 'Optimized for modern bundlers with minimal footprint'
    },
    {
      icon: '⚡',
      title: 'Angular 17+',
      description: 'Standalone components with full TypeScript support'
    }
  ];

  protected readonly portfolioItems = [
    { title: 'E-commerce Dashboard', category: 'Dashboard', color: 'primary' },
    { title: 'Blog Layout', category: 'Content', color: 'secondary' },
    { title: 'Admin Panel', category: 'Dashboard', color: 'accent' },
    { title: 'Landing Page', category: 'Marketing', color: 'success' },
    { title: 'Card Gallery', category: 'Gallery', color: 'warning' },
    { title: 'Data Visualization', category: 'Analytics', color: 'info' }
  ];
}
