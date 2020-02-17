import React from 'react';

import { Projects } from '../data/index.js';

export default () => <div id="projects"
  // onMouseLeave={(e) => {
  //   this.setState({ popover: {} })
  // }}
>
  <h2 className="header">{Projects.header}</h2>
  <div className="d-flex flex-wrap justify-content-around">
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
          className="d-flex flex-column btn-outline-secondary project-card">
          <h4 className="header">{project}</h4>
          <img src={img} alt="images" />
        </div>
        // </Popover>
      )
    })}
  </div>
</div>
