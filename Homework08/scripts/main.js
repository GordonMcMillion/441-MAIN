var whaleSelector = "#whale";
var allWhales = [];

class WhaleInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }

    toString() {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray() {
    var whale = new WhaleInfo("#whale", "images/whale.jpg");
    allWhales.push(whale);
}

$(document).ready(function() {
    initializeArray();
    console.log(allWhales.length);
    console.log(allWhales[0].toString());
    console.log(allWhales[0].theSelector);
    console.log(allWhales[0].theImagePath);

    $(allWhales[0].theSelector).attr("src", allWhales[0].theImagePath);

    $("button").click(function() {
        $(".stuff").fadeOut();
        $("#third").toggle();
        setInterval(moveSquare, 1000);
        $(allWhales[0].theSelector).fadeOut().fadeIn();
    });
});

function moveSquare() {
    $("#square").animate({left: 250}).animate({top: 400}).animate({left: 0}).animate({top: 300});
}