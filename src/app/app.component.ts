import {
  Component,
  effect,
  inject,
  model,
  ModelSignal,
  signal,
} from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './services/player.service';
import { AsyncPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type Theme = 'dark' | 'light' | null;

@Component({
  selector: 'app-root',
  imports: [
    PlayerComponent,
    FilterPipe,
    FormsModule,
    AsyncPipe,
    FontAwesomeModule,
  ],
  providers: [PlayerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cdk-demo';
  playerService = inject(PlayerService);
  darkIcon = faMoon;
  lightIcon = faSun;
  searchText: ModelSignal<string> = model('');
  theme = signal<Theme>(null);
  themeEffect = effect(() => this.applyTheme(this.theme()));

  constructor() {
    const defaultTheme = localStorage.getItem('theme') as
      | 'dark'
      | 'light'
      | null;
    const appliedTheme = defaultTheme || 'light';
    this.theme.set(appliedTheme);
    document.body.setAttribute('data-theme', appliedTheme);
  }

  applyTheme(t: Theme) {
    if (!t) {
      return;
    }
    document.body.setAttribute('data-theme', t as string);
    localStorage.setItem('theme', t as string);
  }
}
