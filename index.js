// Your code here

// document.addEventListener("keydown", e => console.log(e));
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "red"

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0) {
        dodger.style.left = `${left - 7}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 7}px`
    }
}


moveDodgerRight()
moveDodgerLeft()