$(document).ready(function () {
  $("button").click(function () {
    var words = $("#latin").val();

    var holder = words.split(" ");

    console.log(holder);

    for (var i = 0; i < holder.length; i++) {
      if (holder[i].indexOf("Qu") != -1) {
          var num = 2;
      } else {
        var num = 1;
      }

      var firstPart = holder[i].substr(0, num);
      var lowerpart = holder[i].substr(num);
      firstPart = firstPart.toLowerCase();
      holder[i] = lowerpart.charAt(0).toUpperCase() + lowerpart.slice(1) + firstPart + "ay";
    }

    newWord = "";

    for (var i = 0; i < holder.length; i++) {
      if (i === holder.length - 1) {
        newWord += holder[i];
      } else {
        newWord += holder[i] + " ";
      }
    }

    $("#output").text(newWord);
  })
});
