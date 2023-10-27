import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSettingInputComponent } from './color-setting-input.component';

describe('ColorSettingInputComponent', () => {
  let component: ColorSettingInputComponent;
  let fixture: ComponentFixture<ColorSettingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorSettingInputComponent]
    });
    fixture = TestBed.createComponent(ColorSettingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
