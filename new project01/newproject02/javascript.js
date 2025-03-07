const firstNameTxt = document.getElementById("firstName");
const middleNameTxt = document.getElementById("middleName");
const lastNameTxt = document.getElementById("lastName");
const resultFullName = document.getElementById("fullName");

function generateFullName() {
    // Get the input values
    const firstName = firstNameTxt.value.trim();
    const middleName = middleNameTxt.value.trim();
    const lastName = lastNameTxt.value.trim();

    // Concatenate the names (only adding middle name if it's provided)
    let fullName = firstName + " " + (middleName ? middleName + " " : "") + lastName;

    // Update the result
    resultFullName.innerHTML = fullName;
}

function clearEntries() {
    // Clear input fields and the result
    firstNameTxt.value = "";
    middleNameTxt.value = "";
    lastNameTxt.value = "";
    resultFullName.innerHTML = "";
}
