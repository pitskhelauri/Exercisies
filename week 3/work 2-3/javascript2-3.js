let studentList = prompt("სტუდენტის სახელი").split(""),
  studentName = prompt("ნაპოვნი სტუდენტი");

studentList.forEach(student => {
  if (student.includes(studentName)) {
    alert(student);
  }
});
