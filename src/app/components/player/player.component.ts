import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  signal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  WritableSignal,
} from '@angular/core';
import { Player } from '../../types/player.type';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { enterLeaveAnimation } from '../enterLeaveAnimation';
import { ViewPhotoComponent } from '../view-photo/view-photo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player',
  imports: [
    DecimalPipe,
    PercentPipe,
    PortalModule,
    PlayerDetailsComponent,
    ViewPhotoComponent,
    OverlayModule,
    FontAwesomeModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  animations: [enterLeaveAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  @Input({ required: true }) player!: Player;
  @HostBinding('@enterLeaveAnimation') animated = true;
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  @ViewChild('photoPortal', { static: false })
  photoPortalTemplate!: TemplateRef<unknown>;
  overlay = inject(Overlay);
  detailsOpen: WritableSignal<boolean> = signal(false);

  infoIcon = faInfo;

  handleDetailsOpen() {
    this.detailsOpen.set(!this.detailsOpen());
    //
  }

  viewPhoto() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      panelClass: 'cdk-overlay-custom-panel',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      width: '60%',
      minWidth: '400px',
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const templatePortal = new TemplatePortal(
      this.photoPortalTemplate,
      this.viewContainerRef
    );

    overlayRef.attach(templatePortal);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }
}
