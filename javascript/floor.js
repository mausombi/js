function bmiCalculator (weight, height) {
    let bmi=weight/(height*height);
    let interpretation=`Your BMI is ${bmi},so you are normal weight.`
    if(bmi<18.5){
         interpretation=`Your BMI is ${bmi},so you are underweight.`;
    }
    else if(bmi>24.9){
         interpretation=`Your BMI is ${bmi}, so you are overweight.`;
    }
    return interpretation;
}
let out=bmiCalculator(80,2);
console.log(out);