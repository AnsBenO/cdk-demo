import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Player } from '../../types/player.type';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { enterLeaveAnimation } from '../enterLeaveAnimation';

@Component({
  selector: 'app-player-details',
  imports: [DecimalPipe, PercentPipe],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
  animations: [enterLeaveAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailsComponent {
  @Input({ required: true }) playerDetails!: Player;
  @HostBinding('@enterLeaveAnimation') animated = close;
}
