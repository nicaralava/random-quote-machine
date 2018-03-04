var currenteQuoteText="";
var currentQuoteAuthor="";
var colorList = [
    "rgb(142, 68, 173)",
    "rgb(39, 174, 96)",
    "rgb(230, 126, 34)",
    "rgb(192, 57, 43)",
    "rgb(230, 126, 34)",
    "rgb(220, 126, 35)",
    "rgb(230, 116, 44)",
    "rgb(52, 34, 36)",
    "rgb(157, 115, 104)",
    "rgb(77, 157, 163)",
    "rgb(77, 10, 61)",
    "rgb(42, 16, 7)",
    "rgb(228, 206, 56)",
    "rgb(42, 118, 166)",
    "rgb(85, 99, 124)",
    "rgb(208, 3, 70)",
    "rgb(143, 3, 48)",
    "rgb(91, 3, 10)",
    "rgb(58, 3, 254)",
    "rgb(5, 199, 140)",
    "rgb(8, 8, 8)"
];
function getNewQuote()
{
    $.ajax({
        headers: {
            "X-Mashape-Key": "A1PFD7Dj0TmshTOt2rmHKRNiWHm1p1OBCjqjsnHyUjS387Eoe6",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(res){
            if (typeof res === 'string') {
                res = JSON.parse(res);
            }
            currenteQuoteText = res.quote;
            currentQuoteAuthor = res.author;
            $(".text-quote").text(currenteQuoteText);
            $("#quote-twitter").attr("href", "https://twitter.com/intent/tweet?text="+currenteQuoteText);
            $("#quote-tumblr").attr("href", "http://www.tumblr.com/share/link?url=https://codepen.io/nicaralava/pen/OQOeLr&amp;name=Nica&amp;description="+currenteQuoteText);
            if(currentQuoteAuthor)
            {
                $(".text-author").text(" - " +currentQuoteAuthor);
            }
            else {
                $(".text-author").text("- unknown");
            }
        }
    });
}
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * ( (myMax + 1) - myMin) ) + myMin;
}
function data() {
    getNewQuote()
    var rand = randomRange(0,21);
    $( "body" ).addClass( "transform" );
    $("body, a.my-quote-button").css("background-color",colorList[rand]);
    $("a").css("text-decoration","none");
    $(".quote-wapper, .new-quote-wrapper i, .new-quote-wrapper a,.new-quote-wrapper a:hover").css("color",colorList[rand]);
}

$(document).ready(function(){
    data();
    $("a#new-quote").on('click',function(){
        data();
    });
});