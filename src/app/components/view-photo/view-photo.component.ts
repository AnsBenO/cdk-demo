import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { enterLeaveAnimation } from '../enterLeaveAnimation';

@Component({
  selector: 'app-view-photo',
  imports: [],
  templateUrl: './view-photo.component.html',
  styleUrl: './view-photo.component.css',
  animations: [enterLeaveAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPhotoComponent {
  @Input({ required: true }) photoUrl!: string;
  @HostBinding('@enterLeaveAnimation') animated = true;
}
