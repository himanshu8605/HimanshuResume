import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Login extends Component {
    render() {
        return (
            <div>
                <div className="App-text">
          <h1 className="App-text__title">Himanshu  Sharma</h1>
          <h2 className="App-text__body">
            I am a full stack developer
          </h2>
        </div>
                <Link className="d-block small mt-3" to={'Home'}>Know More</Link>
            </div>
        )
    }
}

export default Login
