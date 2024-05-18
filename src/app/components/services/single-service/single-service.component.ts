import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleServiceComponent {
  @Input() bgImageService!: string;
}
