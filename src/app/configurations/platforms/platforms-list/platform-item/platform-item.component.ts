import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Platform } from '../../platforms.model';
import { PlatformService } from '../../platforms.service';

@Component({
  selector: 'app-platform-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './platform-item.component.html',
  styleUrl: './platform-item.component.css'
})
export class PlatformItemComponent {
  @Input() platform!: Platform;

  constructor(private platformService: PlatformService) { }

  onEditItem(id: number) {
    this.platformService.startedEditing.next(id);
  }
}
