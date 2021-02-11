/* Usando querySelector */
const img1 = document.querySelector('.arrow-1')
const img2 = document.querySelector('.arrow-2')
const img3 = document.querySelector('.arrow-3')
const img4 = document.querySelector('.arrow-4')
const img5 = document.querySelector('.arrow-5')

/* Adicionando o listener de evento de click */

img1.addEventListener('click', () => {
    img1.classList.toggle('clicked')
})

img2.addEventListener('click', () => {
    img2.classList.toggle('clicked')
})

img3.addEventListener('click', () => {
    img3.classList.toggle('clicked')
})

img4.addEventListener('click', () => {
    img4.classList.toggle('clicked')
})

img5.addEventListener('click', () => {
    img5.classList.toggle('clicked')
})
