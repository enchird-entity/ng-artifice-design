import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificeDesignComponent } from './artifice-design.component';

describe('ArtificeDesignComponent', () => {
  let component: ArtificeDesignComponent;
  let fixture: ComponentFixture<ArtificeDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtificeDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtificeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
