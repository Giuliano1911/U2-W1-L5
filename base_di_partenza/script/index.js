const navbar = document.getElementById('nav')
const header = document.getElementById('title')

window.addEventListener('scroll', function () {
  const headerHeigth = header.offsetHeight - 150
  if (scrollY > headerHeigth) {
    navbar.classList.add('white-nav')
  } else {
    navbar.classList.remove('white-nav')
  }
})

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
