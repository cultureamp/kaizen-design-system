export const backdropMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    animationTimingFunction: 'cubic-bezier(0.485, 0.155, 0.24, 1.245)', // $animation-easing-function-bounce-in
    animationDuration: '300ms', // $animation-duration-fast
  },
  exit: {
    opacity: 0,
    animationTimingFunction: 'cubic-bezier(0.485, 0.155, 0.515, 0.845)', // $animation-easing-function-bounce-out
    animationDuration: '201ms', // $animation-duration-rapid
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
    animationTimingFunction: 'cubic-bezier(0.485, 0.155, 0.24, 1.245)', // $animation-easing-function-bounce-in
    animationDuration: '300ms', // $animation-duration-fast
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    animationTimingFunction: 'cubic-bezier(0.485, 0.155, 0.515, 0.845)', // $animation-easing-function-bounce-out
    animationDuration: '200ms', // $animation-duration-rapid
  },
}
