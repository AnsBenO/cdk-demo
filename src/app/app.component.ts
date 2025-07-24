import { Component, model, ModelSignal, OnInit, signal } from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import { Player, playersData } from './players';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [PlayerComponent, FilterPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cdk-demo';
  players = signal<Player[]>([]);
  searchText: ModelSignal<string> = model('');

  ngOnInit(): void {
    this.players.set(playersData);
    console.log('Players initialized:', this.players());
  }
}
