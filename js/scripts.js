$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favoriteThing1Input = $("#favoriteThing1").val();
    var favoriteThing2Input = $("#favoriteThing2").val();
    var favoriteThing3Input = $("#favoriteThing3").val();
    var favoriteThing4Input = $("#favoriteThing4").val();
    var arrayList = [favoriteThing1Input, favoriteThing2Input, favoriteThing3Input, favoriteThing4Input];
    var arrayList2 = [arrayList[2], arrayList[0], arrayList[1]];
    var listNumber1 = [arrayList[2]]
    var listNumber2 = [arrayList[0]]
    var listNumber3 = [arrayList[1]]



    $("#output1").text(favoriteThing1Input);
    $("#output2").text(favoriteThing2Input);
    $("#output3").text(favoriteThing3Input);
    $("#output4").text(favoriteThing4Input);
    $("#output5").text(arrayList);
    $("#output6").text(arrayList2);
    $("#output7").text(listNumber1);
    $("#output8").text(listNumber2);
    $("#output9").text(listNumber3);

    $("#results").show();
    event.preventDefault();
  });
});
