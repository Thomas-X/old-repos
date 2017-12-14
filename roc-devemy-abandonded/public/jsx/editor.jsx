import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import hljs from 'highlight.js';
import ReactQuill from 'react-quill';

var counter = 1;

var CHAPTERS = [
    {
        chapterName: "H1",
        hidden: false,
        title: '',
        imgURL: '',
        chapterContent: "",
        isActive: 'active',
    }
]

/*
 *    TODO change API to get roc-dev account data, since roc-dev accounts
 *    TODO don't have google+ profiles by default
 *    TODO see https://developers.google.com/my-business/content/prereqs
 *
 *    TODO update backend to support a RESTFUL api with saving to DB every 5 keystrokes or something.
 *    TODO so React here can send a POST request to the api, including with that the course is published or still a concept
 *    TODO (so add an entry to mongodb).
 *    TODO and instead of a form just have a redirect to the users profile or home page, and onclick of that button
 *    TODO or redirect do a final POST request to the API with that it's published and it's latest data, depending on the type of button
 *
 * */

var counterAutoSave = 0;
var initial = null;
var init = false;
var courseTitle = '', courseThumbnail = '';
var courseId = gup('cID', window.location.href);

var Editor = createReactClass({

    propTypes: {
        initialChapters: PropTypes.arrayOf(PropTypes.shape({
            chapterName: PropTypes.string.isRequired,
            hidden: PropTypes.bool,
            chapterContent: PropTypes.string,
            isActive: PropTypes.string,
        })).isRequired,
    },

    getInitialState: function () {

        return {
            chapters: this.props.initialChapters,
            callbackFromApi: false,
        }
    },

    addChapter: function () {
        counter++;

        var chapterName = "H" + counter;

        this.state.chapters.push({
            chapterName: chapterName,
            hidden: true,
            chapterContent: "",
            isActive: '',
        });


        this.setState(this.state);
    },

    deleteChapter: function (mIndex) {
        var r = confirm('Are you sure to delete this chapter?');

        if (r == true) {

            this.state.chapters.splice(mIndex, 1);

            // we don't have to worry about the other array items because we already set all to hidden on addChapter
            this.state.chapters[this.state.chapters.length - 1].hidden = false;

            if (this.state.chapters.length >= 1) {
                this.state.chapters.forEach(function (elem, index) {
                    if (index !== 0) {
                        this.state.chapters[index].chapterName = String("H" + Number(index + 1));
                    }
                    console.log(index, this.state.chapters.length - 1)
                    //s o we're at the last item
                    if (index === (this.state.chapters.length - 1)) {

                        // or you can do +this.state.chapters.length
                        counter = index + 1;
                    }
                }.bind(this));
            }

            // so the selected chapter is active, otherwise the user doesn't know which  chapter he is after
            // deleting a chapter.
            this.state.chapters.map(function (chapter) {
                chapter.hidden = true;
                chapter.isActive = '';
            });

            this.state.chapters[mIndex - 1].hidden = false;
            this.state.chapters[mIndex - 1].isActive = 'active';

            this.setState(this.state);
        } // no else statement since we don't do anything if there's anything else
    },

    onCourseTitleChange: function (event) {
        courseTitle = event.target.value;
        this.changeMadeAutoSave();
    },
    onThumbnailImageChange: function (event) {
        courseThumbnail = event.target.value;
        this.changeMadeAutoSave();
    },

    componentWillMount: function (index) {
        if (init === false) {
            this.state.callbackFromApi = true;
            this.setState(this.state);

            init = true;
        }
    },

    chapterTabClicked: function (index) {

        this.state.chapters.map(function (chapter, index) {
            chapter.hidden = true;
            chapter.isActive = '';
        });

        this.state.chapters[index].hidden = false;
        this.state.chapters[index].isActive = 'active';

        this.setState(this.state);
    },

    //this is the collection point for if any form or field is changed inside the editor

    changeMadeAutoSave: function () {
        counterAutoSave++;

        this.state.callbackFromApi = false;
        this.setState(this.state);


        if (initial !== null) {
            clearTimeout(initial)
        }


        initial = setTimeout(
            function () {
                // TODO get course id when addCourse is landed upon, by creating
                // TODO the course as the user enters the page and passing it
                // TODO along in the URI params


                var init = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chapters: CHAPTERS,
                        chapterTitle: courseTitle,
                        chapterThumbnail: courseThumbnail,
                        courseId: courseId
                    }),
                };

                fetch('/api/autoSave', init)
                    .then(function (response) {
                        counterAutoSave = 0;
                        console.log(response);
                        this.state.callbackFromApi = true;
                        this.setState(this.state);
                    }.bind(this));
            }.bind(this), 1000);
    },

    render: function () {

        return (
            <div>

                <form action="/addCourses" method="post">
                    <div className="row form-group" style={{marginBottom: 10}}>
                        <input className="form-control" name="course[courseTitle]" type="text"
                               placeholder="Course Title .." onChange={this.onCourseTitleChange}
                               id="courseTitle"/>
                        <input className="form-control" name="course[courseThumbnail]" type="text"
                               placeholder="Thumbnail Image URL .." onChange={this.onThumbnailImageChange}
                               id="courseImgUrl"
                        />
                    </div>
                    {
                        this.state.chapters.map(function (chapter, index) {
                            return (
                                <EditorContent arrayIndex={index} key={index} hidden={chapter.hidden}
                                               chapters={this.state.chapters}
                                               changeMadeAndSave={this.changeMadeAutoSave}
                                               deleteChapter={function () {
                                                   this.deleteChapter(index);
                                               }.bind(this)}
                                />
                            )
                        }.bind(this))
                    }
                    <div className="tab">
                        {
                            this.state.chapters.map(function (chapter, index) {

                                return (
                                    <ChapterTab
                                        chapterName={chapter.chapterName}
                                        key={index}
                                        isActive={this.state.chapters[index].isActive}
                                        clicked={function () {
                                            this.chapterTabClicked(index);
                                        }.bind(this)}
                                    />
                                )
                            }.bind(this))
                        }
                        <button id={counter} type="button" className="addTab" onClick={this.addChapter}>+</button>
                    </div>
                    <hr/>
                    <button id="saveCourseButton" type="submit" className="btn btn-primary">Publish Course</button>
                    {this.state.callbackFromApi ?
                        <span id="savingText">Saved!</span>
                        :
                        <span id="savingText">Saving ..</span>
                    }
                </form>
            </div>

        );
    }
});

function ChapterTab(props) {

    // it's the first item in the array (we don't want a special shape)
    return (
        <button type="button" className={"tablinks " + props.isActive}
                onClick={props.clicked}>{props.chapterName}</button>
    )
}


ChapterTab.propTypes = {
    chapterName: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    isActive: PropTypes.string,
}
class EditorQuill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHtml: CHAPTERS[props.index].chapterContent,
            index: props.index,
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(html) {
        CHAPTERS[this.props.index].chapterContent = html;
        this.state.editorHtml = html;

        console.log(CHAPTERS);

        this.props.changeMadeAndSave();

        this.setState(this.state);
    }

    render() {
        return (
            <ReactQuill
                theme={'snow'}
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={EditorQuill.modules}
                formats={EditorQuill.formats}
                placeholder={this.props.placeholder}
            />
        )
    }
}


EditorQuill.modules = {
    syntax: true,
    toolbar: [
        [{'header': [1, 2, false]}, {'font': []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        [{'script': 'sub'}, {'script': 'super'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
}

EditorQuill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'script'
]

EditorQuill.propTypes = {
    placeholder: PropTypes.string,
    index: PropTypes.number,
    changeMadeAndSave: PropTypes.func
}


var EditorContent = createReactClass({

    propTypes: {
        hidden: PropTypes.bool,
        arrayIndex: PropTypes.number,
        deleteChapter: PropTypes.func,
        chapters: PropTypes.arrayOf(PropTypes.shape({
            chapterName: PropTypes.string.isRequired,
            hidden: PropTypes.bool,
            chapterContent: PropTypes.string,
            isActive: PropTypes.string,
        })),
        changeMadeAndSave: PropTypes.func,
    },

    getInitialState: function () {
        return {
            title: "",
            imgURL: "",
        }
    },

    onTitleChange: function (event) {
        CHAPTERS[this.props.arrayIndex].title = event.target.value;

        this.setState({
            title: event.target.value
        });
        this.props.changeMadeAndSave();
    },
    onImgUrlChange: function (event) {

        CHAPTERS[this.props.arrayIndex].imgURL = event.target.value;

        this.setState({
            imgURL: event.target.value
        });
        this.props.changeMadeAndSave();
    },


    render: function (event) {
        if (this.props.hidden === true) {
            return (
                null
            )
        }
        else {
            var isFirstChapter = null
            if (this.props.arrayIndex == 0) {
                isFirstChapter = true;
            }
            return (
                <div className="content ">
                    {isFirstChapter ?
                        null
                        :
                        <button type="button" id='deleteCourseButtonNav' className="btn btn-danger"
                                onClick={this.props.deleteChapter}>Delete Chapter
                        </button>

                    }


                    <div className="row form-group" style={{marginBottom: 10}}>
                        <input className="form-control" name="course[title]" type="text"
                               placeholder="Chapter Title .." onChange={this.onTitleChange}
                               id="courseTitle"/>
                        <input className="form-control" name="course[backgroundImage]" type="text"
                               placeholder="Chapter Background Image URL .." onChange={this.onImgUrlChange}
                               id="courseImgUrl"
                        />
                    </div>
                    <div className="row form-group">
                        <EditorQuill index={this.props.arrayIndex} changeMadeAndSave={this.props.changeMadeAndSave}/>
                        {initCodeHighLighting()}
                    </div>
                </div>
            )
        }

    }
});

ReactDOM.render(<Editor initialChapters={CHAPTERS}/>, document.getElementById('root'));

// non react stuff but has to be rendered after react is rendered otherwise there's a nullpointer
// since react hasn't rendered the pointed HTML yet

function gup(name, url) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null
        ? null
        : results[1];
}


// this has to be called
function initCodeHighLighting() {

    hljs.configure({
        useBR: false
    })

    hljs.initHighlighting();
}
