var elements = document.getElementsByTagName("div");
var search = document.querySelectorAll(".model");
for (var i = 0; i < elements.length; i++) {
    alert(search[i].innerHTML);
}