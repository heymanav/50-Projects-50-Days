const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
function navigate (){
    window.alert('To Order Click Ok!');
    setTimeout(myURL, 3000);
}
function myURL() {
    window.open('https://zomato.com/');
 }