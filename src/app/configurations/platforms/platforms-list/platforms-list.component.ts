import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlatformItemComponent } from "./platform-item/platform-item.component";
import { Platform } from '../platforms.model';
import { PlatformService } from '../platforms.service';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-platforms-list',
  standalone: true,
  imports: [PlatformItemComponent, NgFor],
  templateUrl: './platforms-list.component.html',
  styleUrl: './platforms-list.component.css'
})
export class PlatformsListComponent implements OnInit, OnDestroy {
  platforms: Platform[] = [];
  private platformChangedSubscription!: Subscription;

  constructor(private platformService: PlatformService) { }

  ngOnInit(): void {
    this.platforms = this.platformService.getPlatforms();
    this.platformChangedSubscription = this.platformService.platformsChanged.subscribe((platforms: Platform[]) => {
      this.platforms = platforms;
    });
  }

  ngOnDestroy(): void {
    this.platformChangedSubscription.unsubscribe();
  }
}
