import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformUpsertComponent } from './platform-upsert.component';

describe('PlatformUpsertComponent', () => {
  let component: PlatformUpsertComponent;
  let fixture: ComponentFixture<PlatformUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformUpsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
