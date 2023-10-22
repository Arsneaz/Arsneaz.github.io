function addRowToTable(data) {
    var table = document.getElementById("table-data");
    var newRow = table.insertRow(table.rows.length);
  
    for (var i = 0; i < data.length; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = data[i];
    }
  
    if (table.rows.length % 2 == 0) {
      newRow.style.backgroundColor = "#f2f2f2";
    }
  }

var formData = JSON.parse(localStorage.getItem('formData'));
addRowToTable(formData);

