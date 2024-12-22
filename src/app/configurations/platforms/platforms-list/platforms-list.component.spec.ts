import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsListComponent } from './platforms-list.component';

describe('PlatformsListComponent', () => {
  let component: PlatformsListComponent;
  let fixture: ComponentFixture<PlatformsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
