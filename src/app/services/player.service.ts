import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from '../types/player.type';
import { environment } from '../environments/environment.development';

@Injectable()
export class PlayerService {
  api = environment.API_URL;

  http = inject(HttpClient);

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  isLoading$ = this.loadingSubject.asObservable();

  players$: Observable<Player[]> = this.http.get<Player[]>(
    `${this.api}/players`
  );
}
