// HTML
<button id="clickBtn"></button>

// JS
let myBtn = document.getElementById("clickBtn");

myBtn.addEventListener("click", function(e) {
    console.log(this); // clickBtn
    console.log(event.currentTarget); // clickBtn
    console.log(this === event.currentTarget); // true
});