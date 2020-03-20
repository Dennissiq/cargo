export default function getDefinedStyle<T>(
  styles: (T | undefined)[],
  fallback?: T
): T | undefined {
  return styles.find(o => o !== undefined) || fallback
}

const cache = {}
export function getCachedDefinedStyle<T>(
  namespace: string,
  styles: (T | undefined)[],
  fallback?: T
): T | undefined {
  const key = styles.toString()
  if (!cache[namespace]) {
    cache[namespace] = {}
  }

  if (!cache[namespace][key]) {
    cache[namespace][key] = getDefinedStyle(styles, fallback)
  }

  return cache[namespace][key]
}
