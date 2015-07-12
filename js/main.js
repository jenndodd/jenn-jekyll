$(document).ready(function() {
  alert("Ready!");
  $(document).scroll(function() {
    if ($(document).scrollTop() > 0)
      $("nav").addClass("scroll");
    else 
      $("nav").removeClass("scroll");
  });
});