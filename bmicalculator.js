function bmicalc(weight,height)
{
    var bmi=weight/(height*height);
    return Math.round(bmi);
}

var w=prompt("Enter Weight : ");
var h=prompt("Enter Height : ");

var bmi = bmicalc(w,h);

if(bmi<18.5)
{
    yourbmi="Underweight";
}
else if(bmi>18.5 && bmi<25)
{
    yourbmi= "Normal";
}
else
{
    yourbmi="Overweight";
}

alert("Hello, your BMI is "+bmi+" it's "+yourbmi);