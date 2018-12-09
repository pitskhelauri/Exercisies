let someString = prompt();

if (someString.length > 15) {
  someString = someString.slice(0, 15) + "...some very long text";
  alert(someString);
}
