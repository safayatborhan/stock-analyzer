import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformItemComponent } from './platform-item.component';

describe('PlatformItemComponent', () => {
  let component: PlatformItemComponent;
  let fixture: ComponentFixture<PlatformItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
