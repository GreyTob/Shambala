const anchors = () => {
  //В Main работал
  // componentDidMount() {
  //   const anchors = () => {
  //     //выбираю все ссылки котороые содержат #
  //     const allAnchors = document.querySelectorAll('a[href*="#"]')
  //     //на каждую ссылку вешаю событие
  //     for (let anchor of allAnchors) {
  //       anchor.addEventListener('click', (e) => {
  //         e.preventDefault()
  //         //получаю значнеие аттрибута href у ссылки
  //         const href = anchor.getAttribute('href')
  //         document.querySelector('' + href).scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //         })
  //       })
  //     }
  //     console.log('anchor')
  //   }
  //   anchors()
  // }
}

export default anchors
