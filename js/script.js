window.onload = () => {     //Objeto y atributo de la venta = Funcion anonima
    document.getElementsByTagName('input')[0].focus() //Elementos por nombre de la etiqueta (segun input)
}

function addRow() {
    var tbody = document.getElementsByTagName("tbody")[0]
    // Obtener todos los inputs que están en el <tfoot>
    var inputs = document.getElementsByTagName("tfoot")[0].getElementsByTagName("input");
    var row = tbody.insertRow() //Insertar una nueva fila al final del <tbody>
    var rowIndex = tbody.rows.length - 1;
    row.setAttribute("id", "row" + rowIndex);
    //Recorrer el número de celdas de la primera fila (<tr>) de la tabla
    for (var i = 0; i < 3; i++) {
        //Crear cada celda dentro de la nueva fila
        var cell = row.insertCell()
        cell.setAttribute("id", "cell" + i)
        cell.innerHTML = inputs[i].value || "N/A";
}
// Crear la celda para el botón de eliminar
var cell = row.insertCell(); // Cuarta celda (índice 3)
cell.setAttribute("id", "cell3");
//En la tercera celda (i === 3), insertar un botón "X"
var button = document.createElement("button")
button.innerHTML = "X"
button.addEventListener("click", function () {
        deleteRow(row.getAttribute("id"))
})
cell.append(button)
clear();
}

function clear() {
    document.getElementsByTagName('input')[0].value = ''
    document.getElementsByTagName('input')[1].value = ''
    document.getElementsByTagName('input')[2].value = ''
    
    document.getElementsByTagName('input')[0].focus()
}

function deleteRow(rowId)
{
    document.getElementById(rowId).remove()
}