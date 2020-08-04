function getBmi(){
    const weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

        height = height * 12;   //ft to in
        height = height * 0.0254;   // in to m
    const newWeight = weight / (height * height);
    const parseValue =parseFloat(newWeight).toFixed(1);
    document.getElementById('bmiValue').value= parseValue;

//bmi_result display block function
const BmiResult = document.getElementById('bmi_result');
    BmiResult.style.display= 'block';
// if condition
const bmiValue = document.getElementById('bmiValue').value;
    if (bmiValue < 18.5) {
        document.getElementById('innerTextBmi').innerText='That you are too thin.';
    }else if (bmiValue > 18.5 && bmiValue <= 24.9) {
        document.getElementById('innerTextBmi').innerText='That you are healthy/Normal';
    }else if (bmiValue > 25 && bmiValue <= 29.9) {
        document.getElementById('innerTextBmi').innerText='That you have overweight.';
    }else if (bmiValue > 30 && bmiValue <= 34.9) {
        document.getElementById('innerTextBmi').innerText='Obesity Class I';
    }else if (bmiValue > 35 && bmiValue <= 39.9) {
        document.getElementById('innerTextBmi').innerText='Obesity Class II';
    }else if (bmiValue >40) {
        document.getElementById('innerTextBmi').innerText='Obesity Class III';
    }else{
        alert("Please Fill in everything correctly");
    }
};