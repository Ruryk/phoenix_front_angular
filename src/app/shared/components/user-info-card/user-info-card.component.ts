import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleBtnComponent } from '../toggle-btn/toggle-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { IChatFile, IChatUser } from '../../../modules/chat/interfaces/chat-user.interfaces';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectChatUserData } from '../../../store/chat/chat.selectors';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { MaterialModule } from '../../../modules/material/materials.module';
import { EAccordionFileType } from '../../enums/accordion.enum';

@Component({
  standalone: true,
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  imports: [
    FormsModule,
    ToggleBtnComponent,
    MatIconModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    MaterialModule,
    TranslateModule,
    AccordionComponent
  ],
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {

  public user$: Observable<IChatUser>;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.user$ = this.store$.select(selectChatUserData);
  }

  endsWithOneOf(value: number, endings: number[]): boolean {
    return endings.includes(value % 10);
  }

  checkFilesSize(files: IChatFile[]): string {
    const length = files.length;
    if (length === 1 || (length > 20 && this.endsWithOneOf(length, [1]))) {
      return 'FILE';
    } else if (this.endsWithOneOf(length, [2, 3, 4]) || (length > 20 && this.endsWithOneOf(length, [2, 3, 4]))) {
      return 'UA_FAILU';
    } else {
      return 'FILES';
    }
  }

  protected readonly EAccordionFileType = EAccordionFileType;
}
