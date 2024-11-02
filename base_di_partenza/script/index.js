const nav = document.getElementById('nav')

window.addEventListener('scroll', function (e) {
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add('white-nav')
    nav.classList.remove('yellow-nav')
  } else {
    nav.classList.add('yellow-nav')
    nav.classList.remove('white-nav')
  }
})

//Appena la pagina scrolla la navbar prende la classe white-nav, appena torna in alto la nav prende la classe yellow-nav
//Non ho scelto una precisa lunghezza in pixel (grandezza header[nav + #title]) perchè dalla foto data si vedeva ancora un po' di header e la nav era già bianca

const allM = document.querySelectorAll('[stroke-linecap="butt"]')
//prendendo getElementsByTagName('g') ogni tanto scomparivano tutte in una volta

const MAnimation = function () {
  const random = Math.floor(Math.random() * allM.length)
  const randomM = allM[random]
  randomM.classList.toggle('opacity')
}

//Dall'array contente tutte le M estraggo una M casuale ed aggiungo o tolgo l'opacità tramite i CSS

setInterval(MAnimation, 16)
//dopo alcune prove penso che 16 millisecondi sia lo stesso intervallo della gif!
//Lasciando andare il sito per x tempo le M "accese" saranno circa il 50% e non dovrebbero mai diventare tutte opacity:0
//Saranno però tutte "accese" all'inizio
