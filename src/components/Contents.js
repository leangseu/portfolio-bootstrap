import React, { Component } from 'react';

// import scrollmagic from 'scrollmagic';
// import { about, skills, educations, experiences, projects } from '../data/Data';

import About from './About.js';
import Skills from './Skills.js';
import Educations from './Educations.js';
import Experiences from './Experiences.js';
import Projects from './Projects.js';

export default class Contents extends Component {
  componentDidMount() {
    // className="slide-in-right"
    // this.controller = new scrollmagic.Controller();

    // // bad practice
    // var divs = document.querySelectorAll("#contents>div");
    // divs.forEach(div => {
    //     div.classList.add("pre-blur-in");
    //     new scrollmagic.Scene({triggerElement: "#" + div.id})
    //             .setClassToggle("#" + div.id, "blur-in")
    //             .addTo(this.controller);
    // });
  }

  render() {
    return <div className="d-flex flex-column col bg-light" id="contents" data-spy="scroll" data-target="#side-bar" data-offset="0">
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Educations />
    </div>
  }
}