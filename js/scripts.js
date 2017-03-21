$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#user").prepend("<img src='img/cat.jpg'>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $("ul#webpage").prepend("<img src='img/dog.jpg'>");
    $("ul#user").children('img').first().click(function() {
      $(this).remove()
    $("ul#webpage").children('img').first().click(function() {
      $(this).remove()
      });
    });
  });

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Bark!</li>");
    $("ul#user").prepend("<img src='img/dog.jpg'>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<img src='img/cat.jpg'>");
    $("ul#user").children('img').first().click(function() {
      $(this).remove()
    $("ul#webpage").children('img').first().click(function() {
      $(this).remove()
      });
    });
  });

  $("button#turtle").click(function() {
    $("ul#user").prepend("<li>Zzzzz...</li>");
    $("ul#user").prepend("<img src='img/turtle.jpg'>");
    $("ul#webpage").prepend("<li>The dog and cat look confused.</li>");
    $("ul#webpage").prepend("<img src='img/dogcat.jpg' width=50%>");
  });
});
