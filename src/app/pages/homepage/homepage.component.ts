import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ServicesComponent, AboutComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {}
