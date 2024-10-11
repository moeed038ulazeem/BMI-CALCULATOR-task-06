//BMI FUNCTION 

function calculateBMI() {
   
    // GET INPUT VALUES FROM USER
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    // VALIDATION CHECKER
    if (!weight || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }
    if (!height || height <= 0) {
        alert("Please enter a valid height.");
        return;
    }

    // BMI CALCULATOR
    const bmi = (weight / (height * height)).toFixed(2);
    
    // BMI CATEGAROIS
    var category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    
    // RESULT 
    document.getElementById("result").innerText = `Your BMI is ${bmi}. Category: ${category}`;
}

// ADDING EVENT LISTNER TO BUTTON
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);




