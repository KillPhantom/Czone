import { ReactNode } from "react";
/* Styles */
import { ButtonWrapper } from "@styles/common/Button";

type PropsType = {
  children: ReactNode;
  disable?: boolean;
  onClick?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  overrideStyle?: any;
  variant?: number;
  size?: number;
};

export const BUTTON_TYPE = {
  GHOST: 1,
  LINK: 2,
};

export const BUTTON_SIZE = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
};

const BUTTON_VARIANT = {
  [BUTTON_TYPE.GHOST]: `
    background: transparent;
    border: 2px solid #F8DB91;
    :hover {
      background: transparent;
    }
  `,
  [BUTTON_TYPE.LINK]: `
    background: transparent;
    :hover {
      background: transparent;
    }
  `,
};

const BUTTON_SIZE_CSS = {
  [BUTTON_SIZE.SMALL]: `
    font-size: 18px;
    line-height: 26px;
    height: 32px;
  `,
  [BUTTON_SIZE.MEDIUM]: `
    font-size: 30px;
    line-height: 36px;
    height: 48px;
  `,
  [BUTTON_SIZE.LARGE]: `
  font-size: 40px;
  line-height: 46px;
  height: 60px;
  `,
};

const Button = ({
  children,
  size = BUTTON_SIZE.SMALL,
  disable,
  overrideStyle,
  variant,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: PropsType) => {
  let css = "";
  if (variant) {
    css += BUTTON_VARIANT[variant];
  }
  if (size) {
    css += BUTTON_SIZE_CSS[size];
  }
  return (
    <ButtonWrapper
      style={{ ...overrideStyle }}
      cssString={css}
      disable={disable}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
