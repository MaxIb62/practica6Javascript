function cargardatos() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../json/materias.json", true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var materias = JSON.parse(xhr.responseText);
          var listaMat = document.getElementById("materiasSEM");

          materias.forEach(function (materia) {
              var mat = document.createElement("li");
              mat.innerHTML = "<strong>materia:</strong> " + materia.materia + "<br>" +
                                      "<strong>profesor:</strong> " + materia.profesor + "<br>" +
                                      "<strong>descripción:</strong> " + materia.descripcion + "<br><br>";

              listaMat.appendChild(mat);
          });
      }
  };
  xhr.send();
}
cargardatos();