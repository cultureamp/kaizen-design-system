import {type ButtonProps} from '../Button';


export const convertBtnProps(ButtonProps: GenericButtonProps): ButtonProps => {
  const { mood, variant, ...restProps } = ButtonProps;
  if (mood) {
    return { ...restProps, variant: mood };
  }
  return ButtonProps;
}