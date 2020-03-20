import styled, { css } from "styled-components"
import designTokens from "../../config/designTokens"

type GradientType = "brand" | "brand-diagonal"

type GradientDefinitionType = {
  start: string
  end: string
  direction: "diagonal" | "top" | "bottom" | "left" | "right"
}

export type BackgroundProps = {
  customGradient?: GradientDefinitionType
  gradient?: GradientType
  color?: string
  image?: string
  tabletImage?: string
  desktopImage?: string
}

function getDefaultGradientDefintion(
  type: GradientType
): GradientDefinitionType {
  switch (type) {
    case "brand":
      return {
        start: designTokens.colors.purple800,
        end: designTokens.colors.purple400,
        direction: "bottom",
      }
    case "brand-diagonal":
      return {
        start: designTokens.colors.purple400,
        end: designTokens.colors.purple800,
        direction: "diagonal",
      }
  }
}

function getGradient(gradient: GradientDefinitionType): string {
  let degrees
  switch (gradient.direction) {
    case "diagonal":
      degrees = 45
      break
    case "top":
      degrees = 0
      break
    case "bottom":
      degrees = 180
      break
    case "left":
      degrees = 270
      break
    case "right":
      degrees = 90
      break
  }

  return `linear-gradient(${degrees}deg, ${gradient.start}, ${gradient.end})`
}

export const gradientStyles = css<BackgroundProps>`
  background: ${props =>
    props.gradient
      ? getGradient(getDefaultGradientDefintion(props.gradient))
      : props.customGradient
      ? getGradient(props.customGradient)
      : "none"};
`

export const nonGradientStyles = css<BackgroundProps>`
  background-color: ${props => props.color || "transparent"};
  background-image: ${props => (props.image ? `url(${props.image})` : "none")};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    background-image: ${props =>
      props.tabletImage || props.image
        ? `url(${props.tabletImage || props.image})`
        : "none"};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    background-image: ${props =>
      props.desktopImage || props.tabletImage || props.image
        ? `url(${props.desktopImage || props.tabletImage || props.image})`
        : "none"};
  }
`

const Background = styled.div<BackgroundProps>`
  ${props =>
    props.customGradient || props.gradient ? gradientStyles : nonGradientStyles}
`

export default Background
