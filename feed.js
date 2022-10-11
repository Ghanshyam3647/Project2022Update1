var i = 0;
var txt = 'Let us know how can we improve'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

window.onload =function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

