import { Component } from '@angular/core';
import { PlatformsListComponent } from './platforms-list/platforms-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlatformService } from './platforms.service';

@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [PlatformsListComponent, RouterOutlet, RouterLink],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.css',
  providers: [PlatformService]
})
export class PlatformsComponent {

}
