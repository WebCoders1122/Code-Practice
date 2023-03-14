// we will find percentage of 3 subjects here by using "function return"
document.write('Total Subjects of 1st Smester = 4' + '<br>');
document.write('Total Marks = 400' + '<br>');

function subjectMarks(urdu, math, chem, islamiyat){
    var marksObtained = urdu+ math+chem+islamiyat;
    return marksObtained;
}

var totalObtainedMarks = subjectMarks(67, 77, 87, 56)
document.write('Marks obtained by Student = ' + totalObtainedMarks + '<br>');

function perFinder(marks) {
    var percalculator = marks/400 * 100
    return percalculator;
}
var percentage = perFinder(totalObtainedMarks);

document.write('Precentage is = ' + percentage + '%')