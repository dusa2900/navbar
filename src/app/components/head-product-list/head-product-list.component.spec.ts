import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadProductListComponent } from './head-product-list.component';

describe('HeadProductListComponent', () => {
  let component: HeadProductListComponent;
  let fixture: ComponentFixture<HeadProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
