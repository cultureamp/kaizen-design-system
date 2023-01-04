import {
  Body,
  Footer,
  Header,
  Modal as Root,
  ActionButton,
  Title,
} from "./components"

export const Modal = Object.assign(Root, {
  Header,
  Title,
  Body,
  Footer,
  ActionButton,
})

Modal.displayName = "Modal"
