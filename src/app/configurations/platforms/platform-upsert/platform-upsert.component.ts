import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '../platforms.model';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../platforms.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-platform-upsert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './platform-upsert.component.html',
  styleUrl: './platform-upsert.component.css'
})
export class PlatformUpsertComponent implements OnInit {
  platform!: Platform | undefined;
  id!: number;
  editMode = false;
  @ViewChild('platformForm', { static: false }) platformForm!: NgForm;
  
  constructor(private route: ActivatedRoute, private platformService: PlatformService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.platform = this.platformService.getPlatform(this.id);
      this.platformForm.setValue({
        name: this.platform?.name,
        description: this.platform?.description
      });
    });
  }

  onSavePlatform(form: NgForm) {
    const formValue = form.value; 
    
    if (this.editMode) 
    {
      var platform = new Platform(this.id, formValue.name, formValue.description);
      this.platformService.updatePlatform(platform);
    } 
    else 
    {
      this.platformService.addPlatform(formValue.name, formValue.description);
    }

    form.reset();
    this.editMode = false;
  } 
  
}
