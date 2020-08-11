import EventEmitter from "events"

export enum Keys {
  ARROW_DOWN = "ArrowDown",
  ARROW_UP = "ArrowUp",
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
  SPACE = " ",
  ENTER = "Enter",
}

const emitter = new EventEmitter()

const handleKeys = (evt: KeyboardEvent) => {
  switch (evt.key) {
    case Keys.ARROW_UP:
      emitter.emit(Keys.ARROW_UP, evt)
      return
    case Keys.ARROW_DOWN:
      emitter.emit(Keys.ARROW_DOWN, evt)
      return
    case Keys.ARROW_LEFT:
      emitter.emit(Keys.ARROW_LEFT, evt)
      return
    case Keys.ARROW_RIGHT:
      emitter.emit(Keys.ARROW_RIGHT, evt)
      return
    case Keys.SPACE:
      emitter.emit(Keys.SPACE, evt)
      return
    case Keys.ENTER:
      emitter.emit(Keys.ENTER, evt)
      return
    default:
      return
  }
}

export const start = () => {
  document.addEventListener("keydown", handleKeys)
}

export const stop = () => {
  document.removeEventListener("keydown", handleKeys)
}

export default emitter
