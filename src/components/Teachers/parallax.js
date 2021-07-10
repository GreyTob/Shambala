export const parallaxOneItem = () => {
  let xOne = [-10, 10]
  if (window.innerWidth < 767) {
    xOne = [0, 0]
  }
  return xOne
}

export const parallaxTwoItem = () => {
  let xTwo = [10, -10]
  if (window.innerWidth < 767) {
    xTwo = [0, 0]
  }
  return xTwo
}
