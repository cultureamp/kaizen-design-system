export const popoverToggle = (
  isOpen: boolean,
  popover: React.RefObject<HTMLDialogElement | HTMLDivElement>,
  parentElement: React.RefObject<HTMLButtonElement>,
): void => {
  if (isOpen) {
    const bounds = parentElement.current?.getBoundingClientRect()
    // TODO: test on multiple browsers
    if (popover.current) {
      popover.current.style.width = `${bounds?.width}px`
      popover.current.showPopover()
    }
  } else {
    popover.current?.hidePopover()
  }
}

export default popoverToggle
