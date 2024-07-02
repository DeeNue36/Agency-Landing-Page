// When the user clicks on the button, toggle between hiding and showing the dropdown content //

function openNav() {
  document.getElementById("navlinks-mobile").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {
    let navlinks = document.getElementsByClassName("nav-links");
    let i;
    for (i = 0; i < navlinks.length; i++) {
      let openNavlinks = navlinks[i];
      if (openNavlinks.classList.contains('show')) {
        openNavlinks.classList.remove('show');
      }
    }
  }
}
