const ScrollUpHandler = () => {
  let t, s
  s = document.body.scrollTop || window.pageYOffset
  t = setInterval(() => {
    if (s > 0) window.scroll(0, (s -= 15))
    else clearInterval(t)
  }, 5)
}
export default ScrollUpHandler
