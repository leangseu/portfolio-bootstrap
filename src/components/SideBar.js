import React from 'react';
import ProfilePic from '../images/profile.jpg';

export default () => {
  return (
    <div className="d-flex flex-column bg-secondary justify-content-center align-items-center col-md-4 col-1 p-2 list-group" id="side-bar">
      <img src={ProfilePic} alt="profile" className="rounded-circle img-fluid w-75" />
      <br />
      <a href="#about" className="hvr-sweep-to-right list-group-item list-group-item-action list-group-item-outline-light"><i className="fas fa-user-circle fa-pull-left fa-lg"></i><span className="d-md-block d-none">  ABOUT</span></a>
      <a href="#experiences" className="hvr-sweep-to-right list-group-item list-group-item-action list-group-item-outline-light"><i className="fas fa-briefcase fa-pull-left fa-lg text-truncate"></i><span className="d-md-block d-none">  EXPERIENCES</span></a>
      <a href="#projects" className="hvr-sweep-to-right list-group-item list-group-item-action list-group-item-outline-light"><i className="fas fa-project-diagram fa-pull-left fa-lg"></i> <span className="d-md-block d-none"> PROJECTS</span></a>
      <a href="#skills" className="hvr-sweep-to-right list-group-item list-group-item-action list-group-item-outline-light"><i className="fas fa-lightbulb fa-pull-left fa-lg"></i><span className="d-md-block d-none">  SKILLS</span></a>
      <a href="#educations" className="hvr-sweep-to-right list-group-item list-group-item-action list-group-item-outline-light"><i className="fas fa-graduation-cap fa-pull-left fa-lg"></i><span className="d-md-block d-none">  EDUCATIONS</span></a>
    </div>
  )

}
