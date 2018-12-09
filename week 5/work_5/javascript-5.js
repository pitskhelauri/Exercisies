var answer = prompt("enter info");
var elements = document.getElementsByTagName("div");
var laptop = document.querySelectorAll(".latop-item");
var desktop = document.querySelectorAll(".desktop-item");

if (answer == "laptop"){
    for (var i = 0; i < elements.length; i++) {
        laptop[i].style.color = "green";
    }
}else if(answer == "desktop"){
    for (var j = 0; j < elements.length; j++) {
        desktop[j].style.color = "blue";
    }
}