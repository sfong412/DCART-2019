    var c = document.getElementById("demo-canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);

    window.addEventListener("load", function() {
        var svgObject = document.getElementById('svg-object').contentDocument;
        var svg = svgObject.getElementById('external-1');
        console.log(svg);
      });