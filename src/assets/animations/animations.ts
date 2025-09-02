import { trigger, transition, style, animate } from '@angular/animations';

export const slideUp = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
  ])
]);

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('350ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    animate('350ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
  ])
]);
