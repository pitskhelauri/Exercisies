let studentList1 = prompt("Student List 1").split(" "),
  studentList2 = prompt("Student List 2").split(" "),
  studentList = [...studentList1, ...studentList2],
  students = new Set();

studentList.forEach(student => students.add(student));

students.forEach(student => {
  alert(student);
});
