function examStatus(marks, examType) {
  if (marks >= 90) {
      grade = "A+";
      if (examType === "Final" && grade === "A+"){
          return true   
      }
      else{
          return false
      }
  }
}
console.log(examStatus(90,"notfinal"));
console.log(examStatus(90,"Final"));