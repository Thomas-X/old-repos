import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

import ReactQuill from 'react-quill';
import {FlatButton, Paper, RaisedButton, TextField} from "material-ui";
import * as styles from "../styles";
import ChapterTab from './editorComponents/ChapterTab';
import {hashHistory} from 'react-router'

import {Tabs as ScrollTabs, Tab as ScrollTab} from 'material-ui-scrollable-tabs/Tabs';
import CheckAuth from './AuthUser';
import AuthTeacher from "./AuthTeacher";

var counter = 1;
var counterAutoSave = 0;
var initial = null;
var init = false;
var courseTitle = '', courseThumbnail = '';
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

export default class EditorPage extends Component {

    render() {
        return (
            <div>
                <AuthTeacher/>
                <Editor/>
            </div>
        )
    }
}
export class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chapters: CHAPTERS,
            callbackFromApi: false,

        }
        this.addChapter = this.addChapter.bind(this);
        this.changeMadeAutoSave = this.changeMadeAutoSave.bind(this);
        this.onCourseTitleChange = this.onCourseTitleChange.bind(this);
        this.onThumbnailImageChange = this.onThumbnailImageChange.bind(this);
        this.deleteChapter = this.deleteChapter.bind(this);
        this.chapterTabClicked = this.chapterTabClicked.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onImgUrlChange = this.onImgUrlChange.bind(this);
        this.publishCourse = this.publishCourse.bind(this);
    }

    addChapter() {
        counter++;


        var chapterName = "H" + counter;

        this.state.chapters.push({
            chapterName: chapterName,
            imgURL: '',
            hidden: true,
            chapterContent: "",
            isActive: '',
        });
        this.setState(this.state);
    }

    deleteChapter(mIndex) {
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
    }

    onCourseTitleChange(event) {
        courseTitle = event.target.value;
        this.changeMadeAutoSave();
    }

    onThumbnailImageChange(event) {
        courseThumbnail = event.target.value;
        this.changeMadeAutoSave();
    }

    onTitleChange(event, index) {
        console.log('onTitlechange:', event, index, this.state.chapters);
        this.state.chapters[index].chapterName = event.target.value;
        this.setState(this.state);
        this.changeMadeAutoSave();
    }

    onImgUrlChange(event, index) {
        this.state.chapters[index].imgURL = event.target.value;
        this.setState(this.state);
        this.changeMadeAutoSave();
    }

    chapterTabClicked(index) {

        this.state.chapters.map(function (chapter, index) {
            chapter.hidden = true;
            chapter.isActive = '';
        });

        this.state.chapters[index].hidden = false;
        this.state.chapters[index].isActive = 'active';

        this.setState(this.state);
    }

    // TODO update post request for correct values
    changeMadeAutoSave() {
        counterAutoSave++;

        this.state.callbackFromApi = false;
        this.setState(this.state);


        if (initial !== null) {
            clearTimeout(initial)
        }


        initial = setTimeout(
            function () {

                var init = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chapters: CHAPTERS,
                        chapterTitle: courseTitle,
                        chapterThumbnail: courseThumbnail,
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
    }

    publishCourse() {
        var init = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chapters: CHAPTERS,
                courseTitle: courseTitle,
                courseThumbnail: courseThumbnail,
            }),
        };

        fetch('/api/publishCourse', init)
            .then(function (response) {
                hashHistory.push('/');
            }.bind(this));
    }


    componentWillMount(index) {
        if (init === false) {
            this.state.callbackFromApi = true;
            this.setState(this.state);
            init = true;
        }
    }

    render() {
        return (
            <div>
                <ScrollTabs tabType="scrollable-buttons">

                    {
                        this.state.chapters.map(function (chapter, index) {
                            return (
                                <ScrollTab onClick={function () {
                                    this.chapterTabClicked(index)
                                }.bind(this)}
                                           label={this.state.chapters[index].chapterName}
                                           key={index}>
                                    <Paper style={styles.paperEditorContent} zDepth={1}>
                                        <EditorContent arrayIndex={index}
                                                       key={index}
                                                       hidden={chapter.hidden}
                                                       chapters={this.state.chapters}
                                                       changeMadeAndSave={this.changeMadeAutoSave}
                                                       deleteChapter={function () {
                                                           this.deleteChapter(index);
                                                       }.bind(this)}
                                                       chapterName={chapter.chapterName}
                                                       imgURL={chapter.imgURL}
                                                       onTitleChange={this.onTitleChange}
                                                       onImgUrlChange={this.onImgUrlChange}
                                                       isActive={this.state.chapters[index].isActive}
                                                       clicked={function () {
                                                       }.bind(this)}/>
                                    </Paper>
                                </ScrollTab>
                            )
                        }.bind(this))
                    }
                </ScrollTabs>
                <Paper style={styles.paper} zDepth={1}>
                    <div className="editorTabContainer">
                        <div className="chapterTitleImageEditorContainer">
                            <div style={styles.leftSideCourseTitleEditorContainer}>
                                <TextField
                                    hintText='Type something ..'
                                    floatingLabelText='Course title'
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    underlineFocusStyle={styles.underlineStyle}
                                    style={styles.courseTitleEditor}
                                    onChange={this.onCourseTitleChange}/>
                                <TextField
                                    hintText='Type something ..'
                                    floatingLabelText='Course Image'
                                    floatingLabelStyle={styles.floatingLabelStyle}
                                    underlineFocusStyle={styles.underlineStyle}
                                    style={styles.courseImageEditor}
                                    onChange={this.onThumbnailImageChange}/>
                            </div>

                            <div style={styles.rightSideCourseButtonsEditorContainer}>
                                {this.state.callbackFromApi ?
                                    <span id="savingText">Saved!</span>
                                    :
                                    <span id="savingText">Saving ..</span>
                                }
                                <RaisedButton id={counter} label='Publish Course' primary={true}
                                              style={styles.publishCourseButtonEditor} onClick={this.publishCourse}/>
                                <RaisedButton id={counter} label='Add Chapter' style={styles.marginButtonsNextToEachother} onClick={this.addChapter}/>
                            </div>
                        </div>
                        <div>

                        </div>


                    </div>
                </Paper>
            </div>
        )
    }
}
Editor.propTypes = {
    initialChapters: PropTypes.arrayOf(PropTypes.shape({
        chapterName: PropTypes.string.isRequired,
        hidden: PropTypes.bool,
        chapterContent: PropTypes.string,
        isActive: PropTypes.string,
    })),
}

class EditorContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.chapterName,
            imgURL: this.props.imgURL,
        }
    }


    render() {


        if (this.props.hidden === true) {
            return (
                null
            )
        }
        else {
            var isFirstChapter = null;
            if (this.props.arrayIndex == 0) {
                isFirstChapter = true;
            }
            return (
                <div className="content ">
                    {isFirstChapter ?
                        null
                        :
                        <FlatButton label='Delete Chapter' className='removeChapterButton'
                                    style={styles.removeChapterButton}
                                    onClick={function () {
                                        this.props.deleteChapter(this.props.arrayIndex);
                                    }.bind(this)}>
                        </FlatButton>}

                    <div className="courseTitleImageEditorContainer">
                        <TextField
                            hintText='Type something ..'
                            floatingLabelText='Chapter Title'
                            floatingLabelStyle={styles.floatingLabelStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            value={this.state.title}
                            style={styles.chapterTitleEditor}
                            onChange={function (event) {
                                this.props.onTitleChange(event, this.props.arrayIndex);
                                this.setState({
                                    title: event.target.value
                                });
                            }.bind(this)}/>
                        <TextField
                            hintText='Type something ..'
                            floatingLabelText='Chapter Thumbnail Image'
                            floatingLabelStyle={styles.floatingLabelStyle}
                            value={this.state.imgURL}
                            underlineFocusStyle={styles.underlineStyle}
                            style={styles.chapterImageEditor}
                            onChange={function (event) {
                                this.props.onImgUrlChange(event, this.props.arrayIndex);
                                this.setState({
                                    imgURL: event.target.value,
                                })
                            }.bind(this)}/>
                    </div>
                    <EditorQuill index={this.props.arrayIndex} changeMadeAndSave={this.props.changeMadeAndSave}/>
                </div>
            )
        }
    }
}

EditorContent.propTypes = {
    chapterName: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    isActive: PropTypes.string,
    onTitleChange: PropTypes.func,
    onImgUrlChange: PropTypes.func,
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

