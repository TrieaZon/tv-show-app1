import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtvComponent } from './searchtv.component';

describe('SearchtvComponent', () => {
  let component: SearchtvComponent;
  let fixture: ComponentFixture<SearchtvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtvComponent]
    });
    fixture = TestBed.createComponent(SearchtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
