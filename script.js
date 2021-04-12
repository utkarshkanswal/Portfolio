const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLink = document.getElementsByClassName('navbar-link')[0];
toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active');
});

window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    console.log(header);
    console.log(header.classList);
    header.classList.toggle("sticky", window.scrollY > 0)
})