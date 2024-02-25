window.onload = function(){
    var paragraphs = document.getElementsByTagName('p');

    for (var i = 0; i < paraagraphs.length; i++) {
        var p = paragraphs[i];

        var remainingSpace = p.clientWidth - p.scrollWidth;

        if (remainingSpace > 50) {
            var br = document.createElement("br");
            p.appendChild(br);
        }
    }
};