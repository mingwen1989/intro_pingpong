var bottlesOfBeer = function(a) {
    var text = "";
    var i;
    for (i = 1; i <= a; i++) {
      text += "<li>"
    if ((i % 3 === 0) && (i % 5 === 0)) {
      text += "<b>ping-pong</b>";
    }
    else if (i % 3 === 0) {
      text += "<b>ping</b>";
    }
    else if (i % 5 === 0) {
      text += "<b>pong</b>";
    }
    else {
      text += i;
    }
    text += "</li>";
  }
    return text;
}

   $(document).ready(function() {
     $("form#rate").submit(function(event) {
       var a = $("input#text").val();

       var result = bottlesOfBeer(a);

       $("#truthy").html(result);

       $("#result").show();
       event.preventDefault();
     });
   });
