import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent {
  public errorMessage: string;
  public fileName: string;
  @Input() pictureUrl: string = '';
  @Output() uploadImage = new EventEmitter<File | null>();

  onUpload(event: any, input: HTMLInputElement): void {
    const file: File = event.target.files[0];
    if (file.size > 1000000) {
      input.value = '';
      this.errorMessage = 'The image you attached exceeds the maximum size';
    } else {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = (ev: any) => {
        this.pictureUrl = ev.target.result;
      };
      reader.readAsDataURL(file);
      input.value = '';
      this.uploadImage.emit(file);
    }
  }

  removeImg(): void {
    this.pictureUrl = '';
    this.fileName = '';
    this.uploadImage.emit(null);
  }
}
