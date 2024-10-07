// Function to calculate BMI
function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    // Validate inputs
    if (!weight || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }
    if (!height || height <= 0) {
        alert("Please enter a valid height.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);
    
    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    
    // Display result
    document.getElementById("result").innerText = `Your BMI is ${bmi}. Category: ${category}`;
}

// Add event listener to the button
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
