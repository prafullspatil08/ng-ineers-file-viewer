import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIneersFileViewerComponent } from './ng-ineers-file-viewer.component';

describe('NgIneersFileViewerComponent', () => {
  let component: NgIneersFileViewerComponent;
  let fixture: ComponentFixture<NgIneersFileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIneersFileViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIneersFileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
