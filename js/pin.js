// onClick pinbutton, store note1 or note2 to pin1 or pin2 on client-side localStorage.

function pin1() {
  var x = document.getElementById("txtinput1").value;
  localStorage.setItem("pin1", x);
  alert("NOTE I. successfully pinned");
  document.getElementById("txtoutput1").innerHTML = x;
}


function pin2() {
  var y = document.getElementById("txtinput2").value;
  localStorage.setItem("pin2", y);
  alert("NOTE II. successfully pinned");
  document.getElementById("txtoutput2").innerHTML = y;
}

// download txt to file on client's local harddrive

function dl(x) {
  function dataUrl(data) {return "data:x-application/text," + escape(data);}
  window.open(dataUrl(x));
}
