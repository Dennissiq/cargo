type GetCargoSpacingType = (value: number) => number

const getCargoSpacing: GetCargoSpacingType = _value => {
  const value = Math.abs(_value)
  const result = value <= 4 ? value * 4 : 4 * 4 + (value - 4) * 8
  return _value < 0 ? result * -1 : result
}

type GetCargoSpacingPxType = (value: number) => string

const getCargoSpacingPx: GetCargoSpacingPxType = value => {
  return getCargoSpacing(value) + "px"
}

export default getCargoSpacing
export { getCargoSpacingPx }
