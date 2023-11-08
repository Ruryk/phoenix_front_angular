export interface IThemeSettings {
  mainColor: string;
  textColor: string;
  backgroundColor: string;
  backgroundImage: string | null;
}

export interface IThemeSettingsForm {
  mainColor: string;
  textColor: string;
  backgroundColor: string;
  backgroundImage: File | null;
}
