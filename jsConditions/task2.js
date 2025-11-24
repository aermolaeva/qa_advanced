const averageGrade = 85;
const grade = Math.floor(averageGrade / 10);

switch (grade) {
    case 10:
    case 9:
        console.log("Excellent");
        break;
    case 8:
        console.log("Very good");
        break;
    case 7:
        console.log("Good");
        break;
    case 6:
        console.log("Satisfactory");
        break;
    default:
        console.log("Unsatisfactory");
}