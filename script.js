// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/14-chevy-ss.jpg?v=1710263909035",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/lead-image-1255465-1675900025.jpeg?v=1710263917042",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/8757d791-9857-406d-b49f-96f22aad8f75.image.png?v=1710436646303",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/a969f235-b843-4c8f-bb0e-6ea5442eb59a.image.png?v=1710436573817",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/1b73d85e-ca9b-4e4d-a1b2-41732d39d62a.image.png?v=1710436542449",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/2014_chevrolet_ss_e787d86f-c31f-43a7-b5c9-bdac5f4d33c1-96780.webp?v=1710263970413",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/Motorious--45.jpg?v=1710263924508",
    "https://cdn.glitch.global/386ec411-ba09-464a-94d2-34754c428fdf/3LYOlVR7-RV_iu0u4Bw.jpg?v=1713287391464"


];


// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    Consle.log();

};
// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});