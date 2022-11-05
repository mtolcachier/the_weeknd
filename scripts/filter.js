const showAll = document.getElementById("all");
const showHoodies = document.getElementById("hoodies");
const showShirts = document.getElementById("shirts");
const showMusic = document.getElementById("music");
const items = document.getElementsByClassName('item');

//DECLARATION OF EVENTS THAT FILTERS THE PRODUCTS BY CATEGORY

//event that shows all the products 
showAll.addEventListener('click',()=> {
    for (let item of items) {
        item.removeAttribute('hidden')
    }
    showHoodies.classList.remove('active')
    showShirts.classList.remove('active')
    showMusic.classList.remove('active')
    showAll.classList.remove('active')
})

//event that shows only hoodies in the ecommerce
showHoodies.addEventListener('click',()=> {
    for (let item of items) {
        item.classList.contains('hoodie') ? item.removeAttribute('hidden') : item.setAttribute('hidden',true)
    }
    showHoodies.classList.add('active')
    showShirts.classList.remove('active')
    showMusic.classList.remove('active')
    showAll.classList.remove('active')
})

//event that shows only shirts in the ecommerce
showShirts.addEventListener('click',()=> {
    for (let item of items) {
        item.classList.contains('shirt') ? item.removeAttribute('hidden') : item.setAttribute('hidden',true)
    }
    showHoodies.classList.remove('active')
    showShirts.classList.add('active')
    showMusic.classList.remove('active')
    showAll.classList.remove('active')
})

//event that shows only music in the ecommerce
showMusic.addEventListener('click',()=> {
    for (let item of items) {
        item.classList.contains('music') ? item.removeAttribute('hidden') : item.setAttribute('hidden',true)
    }
    showHoodies.classList.remove('active')
    showShirts.classList.remove('active')
    showMusic.classList.add('active')
    showAll.classList.remove('active')
})