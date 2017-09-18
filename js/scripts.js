$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favoriteThing1Input = $("#favoriteThing1").val();
    var favoriteThing2Input = $("#favoriteThing2").val();
    var favoriteThing3Input = $("#favoriteThing3").val();
    var favoriteThing4Input = $("#favoriteThing4").val();

    $("#output1").text(favoriteThing1Input);
    $("#output2").text(favoriteThing2Input);
    $("#output3").text(favoriteThing3Input);
    $("#output4").text(favoriteThing4Input);

    $("#results").show();
    event.preventDefault();
  });
});
