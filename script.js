const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function collapseBox(){
    document.getElementById('ThankyouBox').style.transform='scaleY(0)';
}

const ThankyouButton = document.getElementById('ThankyouButton');
ThankyouButton.addEventListener('click', () =>{collapseBox()})