import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Platform } from '../../platforms.model';

@Component({
  selector: 'app-platform-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './platform-item.component.html',
  styleUrl: './platform-item.component.css'
})
export class PlatformItemComponent {
  @Input() platform!: Platform;
}
