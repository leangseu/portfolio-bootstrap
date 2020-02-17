import React from 'react';

import { Projects } from '../data/index.js';

export default () => <div id="projects"
// onMouseLeave={(e) => {
//   this.setState({ popover: {} })
// }}
>
  <h2 className="header">{Projects.header}</h2>
  {Projects.data.map(proj => {
    // create Project cards
    const { project, link, img, header, description } = proj

    return (
      // <Popover
      //         key={project}
      //         isOpen={this.state.popover[project]}
      //         onOuterAction={() => {
      //             // var popover = this.state.popover;
      //             // popover[project] = false;
      //             this.setState({popover: {}})
      //         }}
      //         body={[
      //             <div key={project} className="d-flex flex-column bg-light display-card">
      //                 <h5 className="header">{header}</h5>
      //                 <ul className="m-auto">
      //                     {description.map(item => {
      //                         return <li key={item}>{item}</li>
      //                     })}
      //                 </ul>
      //                 <br/>
      //                 <a href={link} target="_blank" className="btn btn-outline-primary">Link</a>
      //             </div>
      //         ]}
      //         // place="right"
      //         preferPlace={window.innerWidth > 600 ?"row" : "column"}
      //     >
      <div className="d-flex flex-row align-items-center">
        <div
          // onMouseOver={(e) => {
          //   var popover = {};
          //   popover[project] = true;
          //   this.setState({ popover: popover })
          // }}
          // onMouseOut={() => {
          //     var popover = this.state.popover;
          //     popover[project] = false;
          //     this.setState({popover: popover})
          // }}
          className="d-flex flex-column project-card">
          <h6 className="header"><b>{project}</b></h6>
          <img src={img} alt="images" />
        </div>
        {/* <div key={project} className="d-flex flex-column bg-light display-card"> */}
        <div key={project} className="d-flex flex-column h-75 align-items-center">
          <h6 className="header"><b>{header}</b></h6>
          <ul className="m-auto">
            {description.map(item => {
              return <li key={item}>{item}</li>
            })}
          </ul>
          <br />
          <a href={link} target="_blank" className="btn btn-outline-secondary">Link</a>
        </div>
      </div>
      // </Popover>
    )
  })}
  {/* </div> */}
</div>
