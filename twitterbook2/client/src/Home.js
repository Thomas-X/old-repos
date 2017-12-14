import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Input from './Input';
import {withCookies} from 'react-cookie';
import { errorHandler } from './services/Helpers';

class Home extends Component {
    constructor (props) {
        super(props);
    
        const {cookies} = this.props;
        
        this.cookies = cookies;

        this.state = {
            rooms: [],
            roomName: '',
        };
    }
    componentDidMount () {
        axios.post('/api/getRooms', {
            token: this.cookies.get('token')
        }).then((response) => {
            this.setState({
                rooms: response.data.data,
            });
        }).catch(errorHandler);
    }
    sendMessage = () => {
        if (this.state.roomName.length > 0) {
            axios.post('/api/createRoom', {
                data: this.state.roomName,
                token: this.cookies.get('token')
            }).then((response) => {
                this.state.rooms.push(response.data.data);
                this.setState(this.state); 
            }).catch(errorHandler);
        }
    }

    render () {
        return (
            <div>
                {this.state.rooms.map((elem, index) => {
                    return (
                        <div key={index}>
                            <Link to={'/rooms/' + elem.name}>{elem.name}</Link>
                        </div>
                    );
                })}
                <Input 
                    onChangeHandler={(event) => this.setState({roomName: event.target.value})} 
                    buttonName={'send'} 
                    value={this.state.roomName}
                    onClear={() => this.setState({
                        roomName: '',
                    })}
                    onClickHandler={this.sendMessage}/>
            </div>
        );
    }
}

export default withCookies(Home);