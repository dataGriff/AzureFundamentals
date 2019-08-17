function Upload() {
    var csv = document.getElementById('data').innerHTML;
            var table = document.createElement("table");
            var header = table.createTHead();
            var rows = csv.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split("|");
                if (cells.length > 1) {
                    {
                    var row = table.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                    }
                }
            }
            var dvCSV = document.getElementById("dvCSV");
            dvCSV.innerHTML = "";
            dvCSV.appendChild(table);
        }
    
    function search() {
        var input, filter, found, table, tr, td, i, j;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("dvCSV");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }