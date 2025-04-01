import { tokens } from '@kaizen/design-tokens/src/js'

export const backdropMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    animationTimingFunction: tokens.animation.easingFunction.bounceIn,
    animationDuration: tokens.animation.duration.fast,
  },
  exit: {
    opacity: 0,
    animationTimingFunction: tokens.animation.easingFunction.bounceOut,
    animationDuration: tokens.animation.duration.rapid,
  },
}

export const modalMotion = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    animationTimingFunction: tokens.animation.easingFunction.bounceIn,
    animationDuration: tokens.animation.duration.fast,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    animationTimingFunction: tokens.animation.easingFunction.bounceOut,
    animationDuration: tokens.animation.duration.rapid,
  },
}
