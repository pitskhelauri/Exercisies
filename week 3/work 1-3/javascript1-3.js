let numb = prompt("sheiyvanet tanxa");
if (numb[0] === "$") {
  let numb2 = numb.substr(1);
  alert(numb2 * 2.6);
} else if (numb[0] === "L") {
  numb2 = numb.substr(1);
  alert(numb2 / 2.6);
}
