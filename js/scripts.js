$(document).ready(function () {
  $("button").click(function () {
    var words = $("#latin").val();

    var holder = words.split(" ");

    console.log(holder);

    newWord = "";

    for (var i = 0; i < holder.length; i++) {
      if (holder[i].indexOf("Qu") != -1) {
        var num = 2;
      } else {
        var num = 1;
      }

      var firstPart = holder[i].substr(0, num);
      var lowerpart = holder[i].substr(num);

      if (firstPart.charAt(0) === firstPart.charAt(0).toUpperCase()) {
        lowercaseUpper = lowerpart.charAt(0).toUpperCase();
      } else {
        lowercaseUpper = lowerpart.charAt(0);
      }

      firstPart = firstPart.toLowerCase();
      holder[i] = lowercaseUpper + lowerpart.slice(1) + firstPart + "ay";


      if (i === holder.length - 1) {
        newWord += holder[i];
      } else {
        newWord += holder[i] + " ";
      }

    }

    $("#output").text(newWord);
  })
});
