import * as React from "react"

function getSize() {
  if (typeof window !== "undefined") {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    }
  }

  return {
    innerHeight: 0,
    innerWidth: 0,
    outerHeight: 0,
    outerWidth: 0,
  }
}

function useWindowSize() {
  let [windowSize, setWindowSize] = React.useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
