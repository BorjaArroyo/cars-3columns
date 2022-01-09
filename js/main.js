// Save active column
let activeColumnIndex = 1;

// Clicks
const columns = document.querySelectorAll(".column")


columns.forEach((c, idx) => {
    c.addEventListener("click", function() {
        changeActive(idx)
    })
});

// Change status of column
function changeActive(idx) {
    columns[activeColumnIndex].classList.remove("active")
    columns[idx].classList.add("active")
    activeColumnIndex = idx
}
