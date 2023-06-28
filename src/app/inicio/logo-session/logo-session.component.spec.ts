import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSessionComponent } from './logo-session.component';

describe('LogoSessionComponent', () => {
  let component: LogoSessionComponent;
  let fixture: ComponentFixture<LogoSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoSessionComponent]
    });
    fixture = TestBed.createComponent(LogoSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
