

// script.js
function sortArrayAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

const numbers = [34, 7, 23, 32, 5, 62];
const sortedNumbers = sortArrayAscending(numbers);

document.getElementById("output").textContent =
    "Original Array: " + numbers + "\nSorted Array: " + sortedNumbers;