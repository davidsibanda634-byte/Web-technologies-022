// script.js

document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const sum = num1 + num2;
    
    document.getElementById("result").textContent = "Result: " + sum;
});