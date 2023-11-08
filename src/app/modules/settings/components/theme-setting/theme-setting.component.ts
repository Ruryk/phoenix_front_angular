import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService } from '../../../../services/theme.service';
import { IThemeSettingsForm } from '../../interfaces/theme.interfaces';
import { Store } from '@ngrx/store';
import { changeThemeSettings, getThemeSettings } from '../../../../store/settings/settings.actions';
import { selectThemeLoading, selectThemeSettings } from '../../../../store/settings/settings.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss']
})
export class ThemeSettingComponent implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly store$: Store = inject(Store);

  public themeForm: FormGroup;
  public isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.getUserTheme();
    this.initForm();
    this.checkThemeColors();
  }

  getUserTheme(): void {
    this.store$.dispatch(getThemeSettings());
    this.isLoading$ = this.store$.select(selectThemeLoading);
    this.store$.select(selectThemeSettings).subscribe({
      next: (theme) => {
        if (!theme) return;
        this.themeForm.controls['mainColor'].setValue(theme.mainColor);
        this.themeForm.controls['textColor'].setValue(theme.textColor);
        this.themeForm.controls['colors'].setValue(this.themeService.convertGradientToString(theme.backgroundColor));
      }
    });
  }

  initForm(): void {
    this.themeForm = this.fb.group({
      mainColor: ['#329993'],
      textColor: ['#ffffff'],
      colors: this.fb.array(['#ffffff', '#ffffff', '#ffffff']),
      backgroundImage: [null]
    });
  }

  checkThemeColors(): void {
    this.themeForm.valueChanges.subscribe({
      next: form => {
        const color = form.backgroundImage ?? this.calcTheme();
        this.themeService.toggleBackgroundColor(color, form.backgroundImage);
        this.themeService.toggleMainColor(form.mainColor);
        this.themeService.toggleTextColor(form.textColor);
      }
    })
  }

  calcTheme(): string {
    const colors = this.themeForm.value.colors;
    return colors.length === 1 ? colors[0] : `linear-gradient(180deg, ${colors.join(', ')})`;
  }

  get colors(): FormArray {
    return this.themeForm.controls['colors'] as FormArray;
  }

  applyTheme(): void {
    const payload: IThemeSettingsForm = {
      mainColor: this.themeForm.value.mainColor,
      textColor: this.themeForm.value.textColor,
      backgroundImage: this.themeForm.value.backgroundImage,
      backgroundColor: this.calcTheme(),
    }
    this.store$.dispatch(changeThemeSettings({payload}));
  }

  changeBackgroundImage(file: File | null): void {
    this.themeForm.controls['backgroundImage'].setValue(file);
  }
}
