const VIRUS_WORDS = ["რეკლამა", "მარკეტინგი", "ვირუსი"];

let someString = prompt();

if (VIRUS_WORDS.indexOf(someString) !== -1) {
  alert("Yes");
} else alert("No");
