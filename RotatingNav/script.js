//loadingscreen script
const content = document.querySelector('.content')
const loadText = document.querySelector('.loading-text')
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

let load = 0; 
let int = setInterval(blurring , 35);

function blurring (){
    load++;
    if (load>99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    content.style.filter = `blur(${scale(load, 0, 100, 35, 0)}px)`
}

//navbar script
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    container.classList.add('show-nav');
})

close.addEventListener('click', () => { 
    document.body.style.overflow = 'visible';
    container.classList.remove('show-nav');
})

//search bar script
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('mouseover',()=>{
    search.classList.toggle('active');
    input.focus();
}, );
btn.addEventListener('click', () => {
    // Get the input field value
    const searchQuery = input.value;

    // Construct the Google search URL
    const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);

    // Open a new tab with the Google search
    window.open(googleSearchUrl, '_blank');
});