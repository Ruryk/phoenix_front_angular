import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ThemeSettingComponent } from './components/theme-setting/theme-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/materials.module';
import { InputComponent } from '../../shared/components/input/input.component';
import { ColorSettingInputComponent } from '../../shared/components/color-setting-input/color-setting-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageLoaderComponent } from '../../shared/components/image-loader/image-loader.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ThemeSettingComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    InputComponent,
    ColorSettingInputComponent,
    TranslateModule,
    ImageLoaderComponent,
  ],
})
export class SettingsModule {
}
