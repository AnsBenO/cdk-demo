import { style, trigger, transition, animate } from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeaveAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate(
      '400ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate(
      '400ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      style({ opacity: 0, transform: 'scale(0.8)' })
    ),
  ]),
]);
