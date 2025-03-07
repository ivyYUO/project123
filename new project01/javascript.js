const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultSum = document.getElementById("sum");
const resultDifference = document.getElementById("difference");
const resultProduct = document.getElementById("product");
const resultQuotient = document.getElementById("quotient");

function calculate() {
    if (!(num1Txt.value === "" || num2Txt.value === "")) {

        // Parse the input values as floats (for decimal handling)
        const num1 = parseFloat(num1Txt.value);
        const num2 = parseFloat(num2Txt.value);

        // Calculate sum, difference, product, and quotient
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        // Update the result elements
        resultSum.innerHTML = sum;
        resultDifference.innerHTML = difference;
        resultProduct.innerHTML = product;
        resultQuotient.innerHTML = quotient;
    } else {
        alert("Please enter valid numbers in both fields.");
    }
}

function clearEntries() {
    // Clear the input fields and the results
    num1Txt.value = "";
    num2Txt.value = "";
    resultSum.innerHTML = "";
    resultDifference.innerHTML = "";
    resultProduct.innerHTML = "";
    resultQuotient.innerHTML = "";
}
