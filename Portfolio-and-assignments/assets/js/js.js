//lol js.js sounds so silly
var toggle = false;


$("li").click(function () {
    console.log("clicked!");

    var child = $(this).find('i');
    var child2 = $(this).find('p');
    var child3 = $(this).find('span');
    var child4 = $(this).find('a');

    var height = ($(this).height());

    if (height == 150) {
        $(this).attr('id', 'faListItem');
        child.attr("class", "fa-li fa fa-plus");
        child.attr('id', 'faItem');
        child2.attr('id', 'hidden');
        child4.attr('id', 'hidden');
        child3.css({"font-size": "1.1rem", "color": "#606c71"});
    }
    if (height == 25) {
        $(this).attr('id', 'faListItemBig');
        child.attr("class", "fa-li fa fa-minus");
        child.attr('id', 'faItemBig');
        child2.attr('id', 'nothidden');
        child4.attr('id', 'nothidden');
        child3.css({"font-size": "1.2rem", "color": "#159957"});
    }

});

$("i").click(function () {
    console.log("clicked!");
    // $(this).attr('class', 'fa-li fa fa-minus');
    // $(this).parent("")
});

$(".button").click(function () {


        if (toggle) {
            $(".button").html("Expand all");
        }
        else if (!toggle) {
            $(".button").html("Collapse all");
        }

    show_content();


});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 *
 *   Helper functions
 *
 * */


function show_content() {


    var allListItems = null;
    var name = null

    //this might be very intensive on the browser, it might not, we'll see.

    if (toggle) {

        var li = document.querySelectorAll("#faListItem");
        var child4 = document.querySelectorAll("a#nothidden");
        var child = document.querySelectorAll("#faItemBig");
        var child2 = document.querySelectorAll("p#nothidden");
        var child3 = document.querySelectorAll("span#childTable");


        allListItems = document.querySelectorAll("#faListItemBig");
        name = "faListItem";


        li.forEach(function (element) {
            element.id = "faListItem";
        });
        child.forEach(function (element) {
           element.id = "faItem";
           element.className = "fa-li fa fa-plus";
        });
        child2.forEach(function (element) {
            element.id = "hidden";
        })
        child4.forEach(function (element) {
            element.id = "hidden";
        })
        child3.forEach(function (element) {
            element.style.fontSize = "1.1rem";
            element.style.color = "#606c71";
        })
    }
    if (!toggle) {

        var li = document.querySelectorAll("#faListItemBig");
        var child4 = document.querySelectorAll("a#hidden");
        var child = document.querySelectorAll("#faItem");
        var child2 = document.querySelectorAll("p#hidden");
        var child3 = document.querySelectorAll("span#childTable");

        allListItems = document.querySelectorAll("#faListItem");
        name = "faListItemBig";

        li.forEach(function (element) {
            element.id = "faListItemBig";
        });

        child.forEach(function (element) {
            element.id = "faItemBig";
            element.className = "fa-li fa fa-minus";
        });

        child2.forEach(function (element) {
            element.id = "nothidden";
        });

        child4.forEach(function (element) {
            element.id = "nothidden";
        });

        child3.forEach(function (element) {
            element.style.fontSize = "1.2rem";
            element.style.color = "#159957";
        })
    }

    allListItems.forEach(function (element) {
        element.id = name;
    });

    toggle = !toggle;

}