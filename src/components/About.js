import React from 'react';

import { About } from '../data/index.js';

export default () => <div id="about">
  <h1 className="name">{About.name}</h1>
  <div className="d-flex align-items-center justify-content-center flex-xl-row flex-column contact-info">
    <p className="text-center">{About.about}</p>
    {/* <p>Area of Interest: {About.interest}</p> */}
    <a className="btn-outline-secondary" href={'callto:' + About.phone} title={"Call to " + About.phone}><i className="fas fa-phone"></i>  {About.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}</a>
    <a className="btn-outline-secondary" target="_top" href={'mailto:' + About.email} title={"Email to " + About.phone}><i className="fas fa-envelope"></i>  {About.email}</a>
    <a className="btn-outline-secondary" href={About.addressURL} target='_blank' title={"Go to google map"}><i className="fas fa-location-arrow"></i>  {About.address}</a>
  </div>
  <br />
  {/* <p>Hobby: {About.hobby}</p> */}
  <br />
  <div className="d-flex justify-content-center social">
    {About.links.map(link => {
      return <a className="btn btn-light" target='_blank' key={link.site} href={link.url}>
        <img src={link.icon} alt="social icon" />
      </a>
    })}
  </div>
</div>