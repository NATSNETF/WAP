let gpa = prompt('please enter your gpa');
gpa=pareFloat(gpa);

let grade;
if(gpa=== 4.0){
    grade= 'A'
}else if(gpa >= 3.8){
    grade = 'B'
}
else if(gpa >= 3.6){
    grade = 'C'
}
else {
    grade = 'NC';
}
alert('your grade is ' + grade);