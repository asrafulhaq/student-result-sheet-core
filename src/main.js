let name = prompt("Name");
let roll = prompt("Roll");
let reg = prompt("Reg");
let ban = prompt("Bangla");
let eng = prompt("English");
let math = prompt("Math");
let s = prompt("Science");
let ss = prompt("Social Science");
let reli = prompt("Religion");

console.log(`

Student Name    : ${name}
Roll Number     : ${roll}
Reg Number     : ${reg}
================================
Subject - Mark - GPA - Grade
Bangla - ${ban} - ${getGpa(ban)} - ${getGrade(ban)}
English - ${eng} - ${getGpa(eng)} - ${getGrade(eng)}
Math - ${math} - ${getGpa(math)} - ${getGrade(math)}
Science - ${s} - ${getGpa(s)} - ${getGrade(s)}
Social Science - ${ss} - ${getGpa(ss)} - ${getGrade(ss)}
Religion - ${reli} - ${getGpa(reli)} - ${getGrade(reli)}
=====================================
Final Result = ${isPassed(ban, eng, math, s, ss, reli) ? "Passed" : "Failed"}
Final GPA = ${getFinalGPA(ban, eng, math, s, ss, reli).toFixed(2)}
Final Grade = ${getFinalGrade(ban, eng, math, s, ss, reli)}
`);
