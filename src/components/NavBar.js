import React, {Component} from 'react';
// import './styles/NavBar.css';
// import 'bootstrap';

import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Home from './Home'

import Animation from './Animation'

export default class NavBar extends Component {

    render() {
        return <div className='container'>
            <div ref='ul' className='nav-bar'>
                <a to="/" className="btn btn-primary">Home</a>
                <a to="/experience">Experience</a>
                <a to="/project">Project</a>
                <a to="/contact">Contact</a>
            </div>
        </div>
    }
}
