import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentDidMount() {
      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyAsh1-0nymoqoLpAfa47-Bg1Wc6z34V4Oo",
          authDomain: "phpsite-32336.firebaseapp.com",
          databaseURL: "https://phpsite-32336.firebaseio.com",
          projectId: "phpsite-32336",
          storageBucket: "",
          messagingSenderId: "27037243605"
      };
      firebase.initializeApp(config);

      firebase.auth().getRedirectResult().then(function(result) {
          if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
          }
          // The signed-in user info.
          var user = result.user;

          console.log(user);
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
      });

  }

  login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.login}>login</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
