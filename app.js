

const bandTitles = document.getElementById('bandTitle')
const bandImage = document.getElementById('bandImage')

const but1 = document.getElementById('but1').addEventListener('click', () => {
    bandTitles.innerText='band 1'
    bandImage.src ="https://images.pexels.com/photos/1327426/pexels-photo-1327426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

const but2 = document.getElementById('but2').addEventListener('click', () => {
    bandTitles.innerText='band 2'
    bandImage.src ="https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000" 
})

const but3 = document.getElementById('but3').addEventListener('click', () => {
    bandTitles.innerText='band 3'
})

const but4 = document.getElementById('but4').addEventListener('click', () => {
    bandTitles.innerText='band 4'
})

const but5 = document.getElementById('but5').addEventListener('click', () => {
    bandTitles.innerText='band 5'
})

const but6 = document.getElementById('but6').addEventListener('click', () => {
    bandTitles.innerText='band 6'
})