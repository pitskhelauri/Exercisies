let all = prompt(""),
  names = [];
for (i = 0; i < all; i++) {
  let nameIn = prompt("names");
  names.push("  " + nameIn);
}
alert(names.sort());
