import { Component, inject, model, ModelSignal } from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './services/player.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PlayerComponent, FilterPipe, FormsModule, AsyncPipe],
  providers: [PlayerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cdk-demo';
  searchText: ModelSignal<string> = model('');
  playerService = inject(PlayerService);
}
