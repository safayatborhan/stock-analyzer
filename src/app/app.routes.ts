import { Routes } from '@angular/router';
import { PlatformsComponent } from './configurations/platforms/platforms.component';
import { PlatformUpsertComponent } from './configurations/platforms/platform-upsert/platform-upsert.component';

export const routes: Routes = [
    { path: 'platforms', component: PlatformsComponent, children: [
        { path: 'new', component: PlatformUpsertComponent },
        { path: ':id', component: PlatformUpsertComponent }
    ] }
];
