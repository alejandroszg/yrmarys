import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SingleServiceComponent } from './single-service/single-service.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SingleServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
