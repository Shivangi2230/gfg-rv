// =======================
// START GAME
// =======================

const startButton = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

// =======================
// OBJECTS
// =======================

const books = document.getElementById("books");
const laptop = document.getElementById("laptop");
const phone = document.getElementById("phone");
const windowObj = document.getElementById("window");
const door = document.getElementById("door");

// =======================
// POPUP
// =======================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const close = document.getElementById("close");

// =======================
// PROGRESS
// =======================

const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");

let count = 0;
let visited = [];

// =======================
// START BUTTON
// =======================

startButton.onclick = function () {

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

};

// =======================
// POPUP FUNCTION
// =======================

function showPopup(title, text, item) {

    popup.classList.remove("hidden");

    popupTitle.textContent = title;
    popupText.textContent = text;

    if (!visited.includes(item)) {

        visited.push(item);
        count++;

        progress.style.width = (count / 4) * 100 + "%";
        progressText.innerHTML = count + " / 4 Objects Found";

        if (count === 4) {

            door.classList.remove("locked");

        }
    }

}

// =======================
// BOOKS
// =======================

books.addEventListener("click", function () {

    showPopup(
        "📚 Bookshelf",
        "I enjoy reading books because they improve my creativity and problem-solving skills. One of my favourite books is The Kite Runner.",
        "books"
    );

});

// =======================
// LAPTOP
// =======================

laptop.addEventListener("click", function () {

    showPopup(
        "💻 Coding",
        "I am learning Web Development and DSA. I enjoy building projects and improving my programming skills every day.",
        "laptop"
    );

});

// =======================
// PHONE
// =======================

phone.addEventListener("click", function () {

    showPopup(
        "📱 Hobbies",
        "Apart from coding, I enjoy watching tech videos, reading, and exploring new technologies.",
        "phone"
    );

});

// =======================
// WINDOW
// =======================

windowObj.addEventListener("click", function () {

    showPopup(
        "🚀 Future Goals",
        "My dream is to become a Software Engineer, contribute to impactful projects, and continuously learn new technologies.",
        "window"
    );

});

// =======================
// DOOR
// =======================

door.addEventListener("click", function () {

    if (count < 4) {

        alert("🔒 The door is locked! Explore all four objects first.");

    } else {

        alert("🎉 Congratulations!\n\nYou explored my Gaming Portfolio.");

    }

});

// =======================
// CLOSE BUTTON
// =======================

close.addEventListener("click", function () {

    popup.classList.add("hidden");

});

// =======================
// CLICK OUTSIDE POPUP
// =======================

window.addEventListener("click", function (event) {

    if (event.target === popup) {

        popup.classList.add("hidden");

    }

});