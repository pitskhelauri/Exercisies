let all = prompt("რამდენი სტუდენტის შეყვანა გურს "),
  names = [];
for (i = 0; i < all; i++) {
  let nameIn = prompt("names");
  names.push("  " + nameIn);
}
alert(names);
