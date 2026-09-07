let student = {
    fistName : "Wadie",
    lastName : "YATIM",
    notes : [15,16,12,18],
}
let sum = 0
for (let i=0 ; i < student.notes.length ; i++){
    sum = (sum + student.notes[i])
}
let finalResult = sum / student.notes.length

console.log(
    student.fistName,
    student.lastName,
    finalResult
)