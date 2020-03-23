import styled, { css } from "styled-components"
import designTokens from "../../config/designTokens"
import getCargoSpacing, {
  getCargoSpacingPx,
} from "../../utils/functions/getCargoSpacing"
import getDefinedStyle from "../../utils/functions/getDefinedStyle"

/**
 * Common
 */

type FullStyles = {
  full?: boolean
  tabletFull?: boolean
  desktopFull?: boolean
}

const fullStyles = css<FullStyles>`
  width: ${props => (props.full ? "100%" : "auto")};

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    width: ${props =>
      getDefinedStyle([props.tabletFull, props.full]) ? "100%" : "auto"};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    width: ${props =>
      getDefinedStyle([props.desktopFull, props.tabletFull, props.full])
        ? "100%"
        : "auto"};
  }
`

const commonStyles = css`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  font-family: ${designTokens.typography.text.family.bold};
  font-weight: bold;
  font-size: ${designTokens.typography.text.sizes.xsmall.size}px;
  line-height: ${designTokens.typography.text.sizes.xsmall.lineHeight}px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 28px;
    border: 2px solid transparent;
    transition: border-color 0.15s ease-in-out;
  }

  &:hover,
  &:focus {
    transition: background-color 0s;
  }
  &:active {
    transition: background-color 0s;
  }
  &:focus {
    outline: none;
    overflow: visible;
  }
`

/**
 * Primary
 */

export type PrimaryButtonProps = FullStyles & {
  small?: boolean
  tabletSmall?: boolean
  desktopSmall?: boolean
}

const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${fullStyles};
  ${commonStyles};
  line-height: ${props => (props.small ? 32 : 48)}px;
  background-color: ${designTokens.colors.orange600};
  color: ${designTokens.colors.grey900};
  padding: 0
    ${props => (props.small ? getCargoSpacingPx(3) : getCargoSpacingPx(5))};

  &:hover,
  &:focus {
    background-color: ${designTokens.colors.orange400};
  }
  &:active {
    background-color: ${designTokens.colors.orange600};
  }
  &:focus:after {
    border-color: ${designTokens.colors.purple800};
  }
  &[disabled] {
    pointer-events: none;
    background-color: ${designTokens.colors.grey100};
    color: ${designTokens.colors.grey400};
  }

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    line-height: ${props =>
      getDefinedStyle([props.tabletSmall, props.small]) ? 32 : 48}px;
    padding: 0
      ${props =>
        getDefinedStyle([props.tabletSmall, props.small])
          ? getCargoSpacingPx(3)
          : getCargoSpacingPx(5)};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    line-height: ${props =>
      getDefinedStyle([props.desktopSmall, props.tabletSmall, props.small])
        ? 32
        : 48}px;
    padding: 0
      ${props =>
        getDefinedStyle([props.desktopSmall, props.tabletSmall, props.small])
          ? getCargoSpacingPx(3)
          : getCargoSpacingPx(5)};
  }
`

/**
 * Secondary
 */

export type SecondaryButtonProps = FullStyles & {
  light?: boolean
}

const SecondaryButton = styled.button<SecondaryButtonProps>`
  ${fullStyles};
  ${commonStyles};
  line-height: 44px;
  background-color: transparent;
  padding: 0 ${getCargoSpacing(5) - 2}px;
  border: 2px solid
    ${props =>
      props.light ? designTokens.colors.grey000 : designTokens.colors.grey900};
  color: ${props =>
    props.light ? designTokens.colors.grey000 : designTokens.colors.grey900};

  &:after {
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }

  &:hover,
  &:focus {
    background-color: ${props =>
      props.light ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
  }
  &:active {
    opacity: 1;
    background-color: transparent;
  }
  &:focus:after {
    border-color: ${designTokens.colors.purple800};
  }
  &[disabled] {
    pointer-events: none;
    border: 2px solid ${designTokens.colors.grey100};
    color: ${props =>
      props.light ? designTokens.colors.grey100 : designTokens.colors.grey400};
  }
`

/**
 * Invisible
 */

export type InvisibleButtonProps = {
  light?: boolean
  dark?: boolean
}

const InvisibleButton = styled.button<InvisibleButtonProps>`
  ${commonStyles};
  padding: 0;
  background-color: transparent;
  color: ${props =>
    props.light
      ? designTokens.colors.grey000
      : props.dark
      ? designTokens.colors.grey900
      : designTokens.colors.purple600};
  line-height: 48px;

  &:after {
    top: 4px;
    left: -6px;
    right: -6px;
    bottom: 4px;
  }

  &:hover,
  &:focus {
    color: ${props =>
      props.light
        ? designTokens.colors.grey100
        : props.dark
        ? designTokens.colors.grey800
        : designTokens.colors.purple800};
  }
  &:active {
    color: ${props =>
      props.light
        ? designTokens.colors.grey000
        : props.dark
        ? designTokens.colors.grey900
        : designTokens.colors.purple900};
  }
  &:focus:after {
    border-color: ${designTokens.colors.purple800};
  }
  &[disabled] {
    pointer-events: none;
    color: ${designTokens.colors.grey100};
  }
`

const PrimaryButtonLink = PrimaryButton.withComponent("a")
const SecondaryButtonLink = SecondaryButton.withComponent("a")
const InvisibleButtonLink = InvisibleButton.withComponent("a")

export {
  PrimaryButton,
  PrimaryButtonLink,
  SecondaryButton,
  SecondaryButtonLink,
  InvisibleButton,
  InvisibleButtonLink,
}
