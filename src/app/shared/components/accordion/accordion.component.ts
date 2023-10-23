import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../modules/material/materials.module';
import { IChatFile } from '../../../modules/chat/interfaces/chat-user.interfaces';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { EAccordionFileType } from '../../enums/accordion.enum';
import { ImageDirective } from '../../directives/image.directive';

@Component({
  standalone: true,
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  imports: [TranslateModule, MaterialModule, NgIf, NgForOf, NgSwitch, NgTemplateOutlet, NgSwitchCase, NgClass, ImageDirective],
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() headLabel: string = '';
  @Input() subLabel: string;
  @Input() panelData: IChatFile[] = [];
  @Input() dataType: string = EAccordionFileType.files;
  public visibleFiles: IChatFile[] = [];
  public initialVisibleFileCount = 4;
  protected readonly EAccordionFileType = EAccordionFileType;

  ngOnInit(): void {
    if(this.dataType === EAccordionFileType.files) {
      this.visibleFiles = this.panelData.slice(0,4);
      this.initialVisibleFileCount = 4;
      return;
    }
    this.visibleFiles = this.panelData.slice(0,6);
    this.initialVisibleFileCount = 6;
  }

  showMoreFiles(): void {
    const currentIndex = this.visibleFiles.length;
    const endIndex = currentIndex + this.initialVisibleFileCount;
    this.visibleFiles = this.panelData.slice(0, endIndex);
  }

  hideFiles(): void {
    this.visibleFiles = this.panelData.slice(0, 4);
  }
  calcAdditionalImages(): number {
    return this.panelData.length - 6;
  }
}
