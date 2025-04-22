function addTextById(){
    var text = document.getElementById('myP')
    text.innerHTML = "Hello World"
}

function addTextByClass(){
    var textElements = document.getElementsByClassName('test')
    for (var i = 0; i < textElements.length; i++){
        textElements[i].innerHTML = "Hello World";
    }
}

function addRow(){
    var tbody = document.getElementsByTagName("tbody")[0]
    var row = tbody.insertRow()
    row.innerHTML = "New Row"
    var rowIndex = tbody.rows.length - 1;
        row.setAttribute("id", "row" + rowIndex);
}