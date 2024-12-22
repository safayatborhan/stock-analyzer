import { Subject } from "rxjs";
import { Platform } from "./platforms.model";

export class PlatformService {
    private platforms: Platform[] = [
        new Platform(1, 'FSMOne', 'Singapore based broker'),
        new Platform(2, 'Moomo', 'US based broker'),
        new Platform(3, 'Interactive Broker', 'US based broker')
    ];

    platformsChanged = new Subject<Platform[]>();
    startedEditing = new Subject<number>();

    addPlatform(name: string, description: string) {
        var lastId = this.platforms[this.platforms.length - 1].id;
        var platform = new Platform(++lastId, name, description);
        this.platforms.push(platform);
        this.platformsChanged.next(this.platforms.slice());
    }

    getPlatforms() {
        return this.platforms;
    }

    getPlatform(id: number): Platform | undefined {
        var platform: Platform | undefined = this.platforms.find(p => {
            return p.id === id;
        });

        return platform;
    }

    updatePlatform(platform: Platform) {
        var platformToUpdate: Platform | undefined = this.platforms.find(p => {
            return p.id === platform.id;
        });

        if (platformToUpdate != undefined)
        {
            platformToUpdate.name = platform.name;
            platformToUpdate.description = platform.description;
        }
        
        this.platformsChanged.next(this.platforms.slice());
    }

    deletePlatform(id: number) {
        var platform: Platform | undefined = this.platforms.find(p => {
            return p.id === id;
        });

        if (platform != undefined)
        {
            this.platforms.splice(this.platforms.indexOf(platform), 1);
        }
        
        this.platformsChanged.next(this.platforms.slice());
    }
}