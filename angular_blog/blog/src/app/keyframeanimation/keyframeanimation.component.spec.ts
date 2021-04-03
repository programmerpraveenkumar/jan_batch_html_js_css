import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeanimationComponent } from './keyframeanimation.component';

describe('KeyframeanimationComponent', () => {
  let component: KeyframeanimationComponent;
  let fixture: ComponentFixture<KeyframeanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyframeanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframeanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
