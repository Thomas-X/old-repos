import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { socketConnect } from 'socket.io-react';
import axios from 'axios';
import Input from './Input';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { errorHandler } from './services/Helpers';

class App extends Component {
    constructor (props) {
        super(props);

        this.room = this.props.match.params.room;
        const { cookies } = this.props;

        this.cookies = cookies;

        this.state = {
            message: '',
            messages: [],
            user: {},
        };
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value,
        });
    };

    sendMessage = () => {
        this.props.socket.emit('message', {
            roomName: this.room,
            data: this.state.message,
            token: this.cookies.get('token'),
        });
    };

    componentWillMount () {
        axios.post('/api/getRoomExists', {
            roomName: this.room,
            token: this.cookies.get('token'),
        }).then((response) => {
            if (response.status === 500 || response.status === 404) {
                this.props.history.push('/');
            }
        }).catch(errorHandler);
    }

    componentDidMount () {
        axios.post('/api/getMessages', {
            data: this.room,
            token: this.cookies.get('token'),
        }).then((response) => {
            this.setState({ messages: response.data.data });
        }).catch(errorHandler);
        this.props.socket.emit('joinRoom', this.room);

        this.props.socket.on('message', (data) => {
            this.state.messages.push(data.data);
            this.setState(this.state);
        });
    }

    render () {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <Input
                    onChangeHandler={this.handleChange}
                    value={this.state.message}
                    buttonName={'send message'}
                    onClear={() => this.setState({
                        message: '',
                    })}
                    onClickHandler={this.sendMessage}/>

                {
                    this.state.messages.map((elem, index) => {
                        return (
                            <div key={index}>
                                <span>{`${elem.sender} ${elem.data}`}</span>
                                <br/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default withCookies(withRouter(socketConnect(App)));