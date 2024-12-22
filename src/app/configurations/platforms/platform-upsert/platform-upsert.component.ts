import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Platform } from '../platforms.model';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../platforms.service';

@Component({
  selector: 'app-platform-upsert',
  standalone: true,
  imports: [],
  templateUrl: './platform-upsert.component.html',
  styleUrl: './platform-upsert.component.css'
})
export class PlatformUpsertComponent implements OnInit {
  platform!: Platform | undefined;
  id!: number;
  editMode = false;
  
  constructor(private route: ActivatedRoute, private platformService: PlatformService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.platform = this.platformService.getPlatform(this.id);
    });
  }

  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('descriptionInput', { static: false }) descriptionInputRef!: ElementRef;

  onSavePlatform() {
    var name = this.nameInputRef.nativeElement.value;
    var description = this.descriptionInputRef.nativeElement.value;
    
    if (this.editMode) 
    {
      var platform = new Platform(this.id, name, description);
      this.platformService.updatePlatform(platform);
    } 
    else 
    {
      this.platformService.addPlatform(name, description);
    }
  } 
  
}
