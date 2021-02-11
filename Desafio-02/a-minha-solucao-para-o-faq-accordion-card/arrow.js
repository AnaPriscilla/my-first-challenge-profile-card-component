/* 
Select the icon. Be careful when using querySelector because it will select
the first element that matches the argument passed in. So if you have other images
before the icon that you want to select then it might not work.
In such a case, assign an `id` to your icon in HTML, e.g id="arrow-icon" and
then you can select it as `document.querySelector('#arrow-icon')
*/

const img1 = document.querySelector('.arrow-1')
const img2 = document.querySelector('.arrow-2')
const img3 = document.querySelector('.arrow-3')
const img4 = document.querySelector('.arrow-4')
const img5 = document.querySelector('.arrow-5')

/*
Add a click event listener to your icon to toggle the class of `clicked` 
above every time it is clicked 
*/

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
