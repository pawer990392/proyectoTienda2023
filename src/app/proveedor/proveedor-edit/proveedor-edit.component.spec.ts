import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorEditComponent } from './proveedor-edit.component';

describe('ProveedorEditComponent', () => {
  let component: ProveedorEditComponent;
  let fixture: ComponentFixture<ProveedorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorEditComponent]
    });
    fixture = TestBed.createComponent(ProveedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
