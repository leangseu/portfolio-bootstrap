import React, {Component} from 'react';

import Popover from 'react-popover';
import { about, skills, educations, experiences, projects } from '../data/Data';

export default class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popover: {}
        }
    }
    render() {
        return <div className="d-flex flex-column col bg-light" id="contents" data-spy="scroll" data-target="#side-bar" data-offset="0">
                    <div id="about">
                        <h1 className="name">{about.name}</h1>
                        <div className="d-flex justify-content-center flex-xl-row flex-column contact-info">
                            <a className="btn-outline-secondary" href={'callto:' + about.phone} title={"Call to " + about.phone}><i className="fas fa-phone"></i>  {about.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}</a>
                            <a className="btn-outline-secondary" target="_top" href={'mailto:'+about.email} title={"Email to " + about.phone}><i className="fas fa-envelope"></i>  {about.email}</a>
                            <a className="btn-outline-secondary" href={about.addressURL} target='_blank' title={"Go to google map"}><i className="fas fa-location-arrow"></i>  {about.address}</a>
                        </div>
                        <br/>
                        <p>{about.about}</p>
                        <p>Area of Interest: {about.interest}</p>
                        {/*<p>Hobby: {about.hobby}</p> */}
                        <br/>
                        <div className="d-flex justify-content-start social">
                            {about.links.map(link => {
                                return <a target='_blank' key={link.site} href={link.url}>
                                    <img src={link.icon} alt="social icon"/> 
                                </a>
                            })}
                        </div>
                    </div>
                    <div id="skills">
                        <h2 className="header">{skills.header}</h2>
                        {
                            skills.data.map(data => {
                                let buffer = []
                                buffer.push(<h4 key={data.type}>{data.type}</h4>)
                                buffer.push(<div key='languages' className='languages'>{
                                    data.list.map(language => {
                                    return <img key={language.name} src={language.icon} title={language.name} alt={language.name}/>
                                })}</div>)
                                return buffer
                            })
                        }
                    </div>
                    <div id="educations">
                        <h2 className="header">{educations.header}</h2>
                        {
                            educations.data.map(edu => {
                                let buffer = [];
                                const {school, degree, graduated, major, minor, gpa} = edu;
                                buffer.push(<h4 key={school}>{school}</h4>)
                                buffer.push(<p key={degree} className="d-flex flex-lg-row flex-column justify-content-between">
                                                <span >{degree}</span>
                                                <span >{graduated}</span>
                                            </p>)
                                buffer.push(<p key={major}>Major :{major}</p>)
                                buffer.push(<p key={minor}>Minor: {minor}</p>)
                                buffer.push(<p key={gpa}>GPA: {gpa}</p>)
                                return buffer
                            })
                        }
                    </div>
                    
                    <div id="experiences">
                        <h2 className="header">{experiences.header}</h2>
                        {experiences.data.map(job => {
                            let buffer = []
                            const {company, title, date, location, responsibilities} = job
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
                    <div id="projects" 
                        onMouseLeave={(e) => {
                            this.setState({popover: {}})
                        }}
                        >
                        <h2 className="header">{projects.header}</h2>
                        <div className="d-flex flex-wrap justify-content-around">
                            {projects.data.map(proj => {
                                // create projects cards
                                const {project, link, img, description} = proj
                                
                                return (
                                    <Popover
                                            key={project}
                                            isOpen={this.state.popover[project]}
                                            onOuterAction={() => {
                                                // var popover = this.state.popover;
                                                // popover[project] = false;
                                                this.setState({popover: {}})
                                            }}
                                            body={[
                                                <div key={project} className="d-flex flex-column bg-light display-card">
                                                    <ul className="m-auto">
                                                        {description.map(item => {
                                                            return <li key={item}>{item}</li>
                                                        })}
                                                    </ul>
                                                    <a href={link} target="_blank" className="btn btn-outline-primary">Link</a>
                                                </div>
                                            ]}
                                            // place="right"
                                            preferPlace={window.innerWidth > 600 ?"row" : "column"}
                                        >
                                        <div
                                            onMouseOver={(e) => {
                                                var popover = {};
                                                popover[project] = true;
                                                this.setState({popover: popover})
                                            }}
                                            // onMouseOut={() => {
                                            //     var popover = this.state.popover;
                                            //     popover[project] = false;
                                            //     this.setState({popover: popover})
                                            // }}
                                            className="d-flex flex-column btn-outline-secondary project-card">
                                                <h4 className="header">{project}</h4>
                                                <img src={img} alt="images"/>
                                        </div>
                                    </Popover>
                                )
                            })}
                        </div>
                    </div>
                </div>
    }
}