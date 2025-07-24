import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../../players';
import { DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-player',
  imports: [DecimalPipe, PercentPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  @Input() player!: Player;
}
