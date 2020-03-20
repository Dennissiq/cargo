/**
 * #TODO: Refactor type-checking.
 */

function getResponsiveProps(
  props: Object,
  propName: string,
  defaultValue: string,
  _valueToString?: (value: string | number | undefined) => string
): Object {
  const uppercasePropName = propName.charAt(0).toUpperCase() + propName.slice(1)
  const tabletPropName = "tablet" + uppercasePropName
  const desktopPropName = "desktop" + uppercasePropName
  const valueToString =
    _valueToString || (x => (x !== undefined ? x.toString() : ""))

  let result = {}

  result[propName] =
    props[propName] !== undefined
      ? valueToString(props[propName])
      : defaultValue

  result[tabletPropName] =
    props[tabletPropName] !== undefined
      ? valueToString(props[tabletPropName])
      : result[propName]

  result[desktopPropName] =
    props[desktopPropName] !== undefined
      ? valueToString(props[desktopPropName])
      : result[tabletPropName]

  return result
}

function getResponsivePropsCollection(
  props: Object,
  propNames: string[],
  defaultValue: string,
  valueToString?: (value: string | number | undefined) => string
): Object {
  return propNames.reduce(
    (acc, propName) => ({
      ...acc,
      ...getResponsiveProps(props, propName, defaultValue, valueToString),
    }),
    {}
  )
}

export default getResponsiveProps
export { getResponsivePropsCollection }
