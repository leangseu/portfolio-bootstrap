import React from 'react';

import { Educations } from '../data/index.js';

export default () => <div id="educations">
        <h2 className="header">{Educations.header}</h2>
        {
          Educations.data.map(edu => {
            let buffer = [];
            const { school, degree, graduated, major, minor } = edu;
            buffer.push(<h4 key={school}>{school}</h4>)
            buffer.push(<p key={degree} className="d-flex flex-lg-row flex-column justify-content-between">
              <span >{degree}</span>
              <span >{graduated}</span>
            </p>)
            buffer.push(<p key={major}>Major: <b>{major}</b></p>)
            buffer.push(<p key={minor}>Minor: <b>{minor}</b></p>)
            // buffer.push(<p key={gpa}>GPA: {gpa}</p>)
            return buffer
          })
        }
      </div>