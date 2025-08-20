import { AnimationType } from './types'; // Importing the AnimationType interface

const animationTypes: AnimationType[] = [ // Defining an array of animation types
  {
    name: 'FadeIn', // Animation name
    duration: '0.5s', // Duration of the animation
    effect: 'opacity: 0; to { opacity: 1; }', // CSS effect
  },
  {
    name: 'SlideIn', // Animation name
    duration: '0.7s', // Duration of the animation
    effect: 'transform: translateX(-100%); to { transform: translateX(0); }', // CSS effect
  },
  {
    name: 'ZoomIn', // Animation name
    duration: '0.6s', // Duration of the animation
    effect: 'transform: scale(0); to { transform: scale(1); }', // CSS effect
  },
  {
    name: 'Bounce', // Animation name
    duration: '0.8s', // Duration of the animation
    effect: 'transform: translateY(0); to { transform: translateY(-20px); }', // CSS effect
  },
];

export default animationTypes; // Exporting the animation types array as default export