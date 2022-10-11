var i = 0;
var txt = ' WELCOME to our Menu, please browse your Dish below...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

window.onload =function typeWriter() {
  if (i < txt.length) {
    document.getElementById("menu-sl").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}