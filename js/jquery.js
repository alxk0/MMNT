// jquery to store note1 + note2 to client-side localStorage
// from https://codepen.io/NikxDa/pen/vxjgpb

$(document).ready (function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("note" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem ("note" + $(this).attr("data-store"), $(this).val());
    })
  })
