var table = document.getElementById('table') // document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.background='red';
}