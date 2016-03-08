var pingPong = function(a) {
    var arr = [];
    var i;
    for (i = 1; i <= a; i++) {
      arr.push("<li>")
    if ((i % 3 === 0) && (i % 5 === 0)) {
      arr.push("<b>ping-pong</b>");
    }
    else if (i % 3 === 0) {
      arr.push("<b>ping</b>");
    }
    else if (i % 5 === 0) {
      arr.push("<b>pong</b>");
    }
    else {
      arr.push(i);
    }
    arr.push("</li>");
  }
    return arr.join("");
}

   $(document).ready(function() {
     $("form#rate").submit(function(event) {
       var a = $("input#text").val();

       var result = pingPong(a);

       $("#truthy").html(result);

       $("#result").show();
       event.preventDefault();
     });
   });
