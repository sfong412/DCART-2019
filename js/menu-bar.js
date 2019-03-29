/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mobileMenu() {
    var x = document.getElementById("myMenu-bar");
    var y = document.getElementsByClassName("social-media");

    var fb = document.getElementById("facebook");
    var insta = document.getElementById("instagram");

    if (x.className === "menu-bar") {
      x.className += " responsive";
    } else {
      x.className = "menu-bar";
    }

    if (fb.id === "facebook") {
        y.innerHTML += "facebook";
      } else {
        y.innerHTML += "";
      }
  } 