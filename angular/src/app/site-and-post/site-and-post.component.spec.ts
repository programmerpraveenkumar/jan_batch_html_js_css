import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAndPostComponent } from './site-and-post.component';

describe('SiteAndPostComponent', () => {
  let component: SiteAndPostComponent;
  let fixture: ComponentFixture<SiteAndPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAndPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAndPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
