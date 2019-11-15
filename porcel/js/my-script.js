// Gird
var elements = document.getElementsByClassName("row-fix-pad");
var desc = document.getElementsByClassName("desc");


function listView() {
	for (var i = 0; i < elements.length; i++) {
	  elements[i].classList.remove('col-md-4');
	  elements[i].classList.remove('col-sm-6');
	  elements[i].classList.add('col-md-12');
	  elements[i].classList.add('col-sm-12');
	  elements[i].classList.add('list-set');
	}

	for (var k = 0; k < desc.length; k++) {
	   desc[k].style.display = "block";
	}
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('col-md-12');
    elements[i].classList.remove('col-sm-12');
    elements[i].classList.remove('list-set');
    elements[i].classList.add('col-md-4');
    elements[i].classList.add('col-sm-6');
  }
	for (var k = 0; k < desc.length; k++) {
	   desc[k].style.display = "none";
	}
}