import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player-details',
  imports: [],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailsComponent { }
