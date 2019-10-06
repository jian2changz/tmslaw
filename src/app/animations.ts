import {
  trigger,
  animate,
  transition,
  style,
  group,
  query,
  stagger
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [

  transition('* => *', [

    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);


export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [

    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
      query('.welcome', style({ opacity:0 }), { optional: true }),

    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s 0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),

  
      query(':enter .welcome', stagger(200, [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s 1s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]), { optional: true }),

      query(':leave .welcome', [
        style({ transform: 'translateY(0%)', opacity:1 }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)', opacity:0 }))
      ], { optional: true }),
      
      ])
    ])
  ])
