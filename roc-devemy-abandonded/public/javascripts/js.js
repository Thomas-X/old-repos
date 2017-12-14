//there's maybe errors here according to IDE because he's not happy we're not using server-side highlight.js and quill.


hljs.configure({
    useBR: true
})

hljs.initHighlighting();


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],

    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],

    ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        syntax: true,              // Include syntax module
        toolbar: toolbarOptions
    },
    theme: 'snow'
});


var form = document.querySelector('form');
form.onsubmit = function () {


    //populate hidden form with quill editor data
    var about = document.querySelector("input[name='course[description]']");

    about.value = JSON.stringify(quill.root.innerHTML);

    console.log(quill.root.innerHTML);


};


function openChapter(event) {
    var tabcontent;
    var tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");



    tabcontent.forEach(function (elem) {
        elem.style.display = "none";
    });

    tablinks = document.getElementsByClassName("tablinks");

    tablinks.forEach(function (elem) {
        elem.className = elem.className.replace(" active", "");
    });

    document.getElementById("h" + counter).style.display = "block";
    event.currentTarget.classname += " active";
}

