$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#user").prepend("<img src=img/cat.jpg>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $("ul#webpage").prepend("<img src=img/dog.jpg>");
    $("ul#user").children('li').first().click(function() {
      $(this).remove()
      alert('Meow/woof!');
    });
  });

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Bark!</li>");
    $("ul#user").prepend("<img src=img/dog.jpg>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<img src=img/cat.jpg>");
  });

  $("button#turtle").click(function() {
    $("ul#user").prepend("<li>Zzzzz...</li>");
    $("ul#user").prepend("<img src=img/turtle.jpg>");
    $("ul#webpage").prepend("<li>The dog and cat look confused.</li>");
    $("ul#webpage").prepend("<img src=img/dogcat.jpg>");
  });
});
