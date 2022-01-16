import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCookieComponent } from './detail-cookie.component';

describe('DetailCookieComponent', () => {
  let component: DetailCookieComponent;
  let fixture: ComponentFixture<DetailCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
