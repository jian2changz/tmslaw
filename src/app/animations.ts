import {
  trigger,
  animate,
  animateChild,
  transition,
  style,
  group,
  query,
  state,
  stagger,
  keyframes
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
        style({opacity:0 }),
        animate('0.5s 0.75s ease-in-out', style({opacity: 1 }))
      ], { optional: true }),

      query(':leave', [
        style({ opacity:1 }),
        animate('0.5s 0.25s  ease-in-out', style({ opacity:0 }))
      ], { optional: true }),

  
      query(':enter .welcome', stagger(200, [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s 0.75s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]), { optional: true }),

      query(':leave .welcome', [
        style({ transform: 'translateY(0%)', opacity:1 }),
        animate('0.5s 0.25s ease-in-out', style({ transform: 'translateY(100%)', opacity:0 }))
      ], { optional: true }),
      
      ])
    ])
  ])

export const slideOut = trigger('slideOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in <=> out', [
        group([
          query('@childani', stagger(50, [animateChild()]), { optional: true }),
       animate('250ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
       ]),
    ])
      ])

export const childani = trigger('childani', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)', opacity:1
      })),
      state('out', style({
        transform: 'translate3d(-20%, 0, 0)', opacity:0
      })),
      transition('in <=> out', [
        group([
       
       animate('500ms cubic-bezier(0.215, 0.61, 0.355, 1)', style ({transform: 'translate3d(0, 0 , 0)'})),
animate('400ms cubic-bezier(0.645, 0.045, 0.355, 1)', style ({opacity:1}))
       ])
    ])
      ])
      
export const hamburgerani = trigger('hamburgerani', [

state('start', style({
        transform: 'translate3d(0, 0, 0)'
      })),
  state('45left', style({
        transform: 'rotate(225deg)', top: '50%'
      })),
      state('45right', style({
        transform: 'rotate(-225deg)',  top: '50%'
      })),
      state('hide', style({
        transform: 'rotate(225deg)',  top: '50%'
      })),
      transition('start <=> 45left', 
        animate('150ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
      transition('start <=> 45right',
        animate('450ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
      transition('start <=> hide',
        animate('300ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
        
      ])
      
  