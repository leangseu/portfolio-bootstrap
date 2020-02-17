import React from 'react';

import { Experiences } from '../data/index.js';

export default () => <div id="experiences">
        <h2 className="header">{Experiences.header}</h2>
        {Experiences.data.map(job => {
          let buffer = []
          const { company, title, date, location, responsibilities } = job
          buffer.push(<h3 key={company} className="company">{company}</h3>)
          buffer.push(<h4 key={title} className="title">{title}</h4>)
          buffer.push(
            <p key={date} className="d-flex flex-lg-row flex-column justify-content-between">
              <span >{location}</span>
              <span >{date}</span>
            </p>)
          // buffer.push()
          // buffer.push()
          buffer.push(<ul key="responsibilities">{responsibilities.map((res, index) => {
            return <li key={index}>{res}</li>
          })}</ul>)
          return buffer
        })}
      </div>