var express = require('express')
var request = require('request');
var app = express()

var options = {
    url: 'https://api.github.com/users/Thomas-X/repos',
    headers: {
        'User-Agent': 'Thomas-X'
    }
};


app.set('view engine', 'hbs');


app.get('/', function (req, res) {


    request(options, function (err, info) {

        var json = info.body.split(",");
        var repos = [];
        var name = null;
        var description = null;
        var url = null;
        var language = null;
        var index = 0;
        var elem = null

        // console.log(Object.keys(json).length);


        for (var i = 0; i < json.length; i++) {
            elem = json[i];

            index++


            if (index == json.length) {
                console.log(repos);
                res.render('thing', repos);
                break;
            }


            if (index <= json.length) {

                if (elem.includes("\"name\":")) {
                    elem = elem.slice(8, (elem.length - 1));
                    name = elem;
                }
                if (elem.includes("\"description\":")) {
                    //if no description of git repo is provided
                    elem = elem.slice(15, (elem.length - 1));
                    if (elem == "ul") {
                        elem = "No description was provided by me :(";
                    }
                    description = elem;
                }
                if (elem.includes("\"language\":")) {
                    elem = elem.slice(12, (elem.length - 1));
                    language = elem.toUpperCase();
                }
                if (elem.includes("\"html_url\":")) {
                    elem = elem.slice(12, (elem.length - 1));
                    url = elem;
                }

                if (name != null && description != null && language != null && url != null) {

                    var repo = {
                        name: name,
                        description: description,
                        language: language,
                        url: url
                    };

                    repos.push(repo);

                    name = null;
                    description = null;
                    language = null;
                    url = null
                }
            }
        }

    });
});


app.listen(3000, function () {
    console.log('Express is listening at port 3000')
})