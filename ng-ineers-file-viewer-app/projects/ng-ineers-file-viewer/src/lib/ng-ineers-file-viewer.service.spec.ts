import { TestBed } from '@angular/core/testing';

import { NgIneersFileViewerService } from './ng-ineers-file-viewer.service';

describe('NgIneersFileViewerService', () => {
  let service: NgIneersFileViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIneersFileViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
