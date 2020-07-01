import { TestBed } from '@angular/core/testing';

import { ArtificeDesignService } from './artifice-design.service';

describe('ArtificeDesignService', () => {
  let service: ArtificeDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtificeDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
