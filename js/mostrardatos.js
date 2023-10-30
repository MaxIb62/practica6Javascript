function cargarDatos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var datos = JSON.parse(this.responseText);
        var informacionDiv = document.getElementById("informacion");
        var html = "";

        datos.forEach(function(item) {
          html += "<p><strong>Materia:</strong> " + item.materia + "</p>";
          html += "<p><strong>Profesor:</strong> " + item.profesor + "</p>";
          html += "<p><strong>Descripción:</strong> " + item.descripcion + "</p>";
          html += "<hr>";
        });

        informacionDiv.innerHTML = html;
      }
    };
    xhttp.open("GET", "materias.json", true);
    xhttp.send();
  }

  // Llama a la función para cargar los datos al cargar la página
  cargarDatos();