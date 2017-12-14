import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme, customTheme} from './customMuiTheme';
import {CircularProgress} from 'material-ui';

import {LayoutProvider} from 'react-page-layout';

import * as styles from './styles';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// react router
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'

// import components
import NavigationAndDrawer from './components/NavigationAndDrawer';
import NotLoggedInHomepage from './components/CheckLoggedInOrNotHomePage';
import AboutMe from './components/AboutMe';
import NotFound from './components/NotFound';
import Me from './components/Me';
import Logout from './components/Logout';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted'
import Course from './components/Course';
import CreateCourse from './components/CreateCourse';
import EditorPage from './components/EditorPage';
import MyCourses from './components/MyCourses';
import AboutSite from './components/AboutSite';

//TODO close drawer when browser is certain width on default


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={hashHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={NotLoggedInHomepage}/>
                        <Route path="/about/me" component={Me}/>
                        <Route path="/about/me/mycourses" component={MyCourses}/>
                        <Route path="/about/author" component={AboutSite}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path='/info/getStarted' component={GetStarted}/>
                        <Route path="/courses/createCourse" component={CreateCourse}/>
                        <Route path="/courses/editor/:courseid" component={EditorPage}/>
                        <Route path="/courses/:courseid" component={Course}/>
                        {/* this should always be the last route, otherwise the router params routes break*/}
                        <Route path="*" component={NotFound}/>
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationAndDrawer/>
                <div style={styles.container}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

