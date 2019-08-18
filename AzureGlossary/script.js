function Upload() {
    var csv = document.getElementById('data').innerHTML;
            var table = document.createElement("table");
            var header = table.createTHead();

            var row = header.insertRow(0);     
            var cell = row.insertCell(0);
            cell.outerHTML = "<th  style=\"width:10%;\" onclick=\"sortTable(0)\"><b>Term</b></th>";  
            var cell = row.insertCell(1);
            cell.outerHTML = "<th style=\"width:20%;\"  onclick=\"sortTable(1)\"><b>Description</b></th>"; 
            var cell = row.insertCell(2);
            cell.outerHTML = "<th style=\"width:5%;\"  onclick=\"sortTable(2)\"><b>Abb</b></th>";   
            var cell = row.insertCell(3);
            cell.outerHTML = "<th style=\"width:10%;\"  onclick=\"sortTable(3)\"><b>Link</b></th>"; 
            var cell = row.insertCell(4);
            cell.outerHTML = "<th style=\"width:20%;\"  onclick=\"sortTable(4)\"><b>Notes</b></th>"; 

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


            sortTable(0);
        }


    
    function search() {
        var input, filter, found, table, tr, td, i, j, th;
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


    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("dvCSV");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc"; 
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.getElementsByTagName("TR");
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir === "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
              }
            } else if (dir === "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
          } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount === 0 && dir === "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
