// onClick pinbutton, store note1 or note2 to pin1 or pin2 on client-side localStorage.

function pin1() {
  var x = document.getElementById("txtinput1").value;
  localStorage.setItem("pin1", x) ;
  document.getElementById("txtoutput1").innerHTML = x;
  alert(x);
}


function pin2() {
  var y = document.getElementById("txtinput2").value;
  localStorage.setItem("pin2", y) ;
  document.getElementById("txtoutput2").innerHTML = y;
  alert(y);
}
