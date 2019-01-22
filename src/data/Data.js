// programing langauges
import JavaScript from '../images/programing/JavaScript.png'
import HTML from '../images/programing/HTML.png'
import CSS from '../images/programing/CSS.png'
import C from '../images/programing/C.png'
import Cpp from '../images/programing/C++.png'
import Java from '../images/programing/Java.png'
import Python from '../images/programing/Python.png'
import BashScript from '../images/programing/BashScript.png'
import Racket from '../images/programing/Racket.png'

// Database
import MySQL from '../images/programing/MySQL.png'
import MongoDB from '../images/programing/MongoDB.png'
import PostgresSQL from '../images/programing/PostgresSQL.png'
import SQLite from '../images/programing/SQLite.png'

// library
import jQuery from '../images/programing/jQuery.png'
import React from '../images/programing/React.png'
import Node from '../images/programing/Node.png'
import Express from '../images/programing/Express.png'
import SmartClient from '../images/programing/SmartClient.png'
import SFML from '../images/programing/SFML.png'
import Mockito from '../images/programing/Mockito.png'

// social media
import Linkedin from '../images/profile-link/linkedin.png'
import GitHub from '../images/profile-link/github.png'

// projects
import Messenger from '../images/projects/messenger.gif'
import TimberMan from '../images/projects/timberman.gif'
import MusicMash from '../images/projects/MusicMash.gif'
import AutomaText from '../images/projects/AutomaText.gif'

var about = {
    name: "Leangseu Kim",
    address: "22 Avery St, Lowell, MA 01851",
    addressURL: "https://goo.gl/maps/qF5Cv549Wd32",
    phone: "9782595390",
    email: "kimleangseu@gmail.com",
    about: "Undergraduate student at University of Massachusetts Lowell",
    interest: "Web development front-end and back-end, mobile application development, game development, artificial intelligence and data science",
    hobby: "Hiking, swimming and gaming (League of Legend)",
    links: [
        {
            site: "Linkedin",
            url: "https://www.linkedin.com/in/leangseu/",
            // icon: "fab fa-linkedin-in"
            icon: Linkedin
        },
        {
            site: "GitHub",
            url: "https://github.com/leangseu",
            // icon: "fab fa-github-alt"
            icon: GitHub
        }
    ]
}

var skills = {
    header: "SKILLS",
    data: [{
        type: "Programing languages",
        list: [{
                name: 'JavaScript',
                icon: JavaScript
            },
            {
                name: 'HTML',
                icon: HTML
            },
            {
                name: 'CSS',
                icon: CSS
            },
            {
                name: "C",
                icon: C
            },
            {
                name: 'C++',
                icon: Cpp
            },
            {
                name: 'Java',
                icon: Java
            },
            {
                name: 'Python',
                icon: Python
            },
            {
                name: 'Bash Script',
                icon: BashScript
            },
            {
                name: 'Racket',
                icon: Racket
            }
        ],
    }, {
        type: "Databases",
        list: [
            {
                name: 'MySQL',
                icon: MySQL
            },
            {
                name: 'MongoDB',
                icon: MongoDB
            },
            {
                name: 'PostgresSQL',
                icon: PostgresSQL
            },
            {
                name: 'SQLite',
                icon: SQLite
            }
        ],
    }, {
        type: "Libraries",
        list: [{
                name: 'jQuery',
                icon: jQuery
            },
            {
                name: 'React',
                icon: React
            },
            {
                name: 'Node',
                icon: Node
            },
            {
                name: 'Express',
                icon: Express
            },
            {
                name: 'SmartClient',
                icon: SmartClient
            },
            {
                name: 'SFML/CSFML',
                icon: SFML
            },
            {
                name: 'Mockito',
                icon: Mockito
            }
        ],
    }]
}

var educations = {
    header: "EDUCATIONS",
    data: [{
        school: "University of Massachusetts Lowell",
        degree: "Bachelor of Science in Computer Science",
        graduated: "May 2018",
        major: "Computer Science",
        minor: "Math Minor",
        gpa: 3.4
    }]
}

var experiences = {
    header : "WORK EXPERIENCES",
    data: [
        {
            company: "Global Q Inc.,",
            title: "Software Developer",
            location: "Chelmsford, MA",
            date: "February 2018 - Present",
            responsibilities: [
                "Work in a fast paced startup environment",
                "Work in a collaborative software engineering team",
                "Utilize SmartClient framework to build a full stack web application",
                "Awarded as the best employee in May 2018",
            ]
        },
        {
            company: "NetNumber Inc.,",
            title: "Intern",
            location: "Lowell, MA",
            date: "MA June 2017 - August 2017",
            responsibilities: [
                "Developed an application on Titan to send signal using Java",
                "Wrote automation with Bash Script and used regular expression to import, export and recreate data from log",
                "Quality assurance with Mockito"
            ]
        },
        {
            company: "Prathna's Convenience Store",
            title: "Cashier",
            location: "Lowell, MA",
            date: "June 2013 - April 2017",
            responsibilities: [
                "Provided prompt and professional service to customers",
                "Showed care and accuracy when handling money",
                "Maintained positive attitude when dealing with difficult customers",
                "Supervised and trained new employees"
            ]
        },
        {
            company: "F&M Tool and Plastics, Inc.",
            title: "Assembler",
            location: "Leominster, MA",
            date: "February 2013 - June 2013",
            responsibilities: [
                "Assembled plastics products for the home such as storage bins and plastic drawers",
                "Demonstrated ability to learn quickly and work in a fast-paced environment"
            ]
        }
    ]
}

var projects = {
    header: "PROJECTS",
    data: [
        {
            project: "Timber Man",
            link: "https://github.com/oplS17projects/Timberman",
            img: TimberMan,
            header: "Window & Mac",
            description: [
                "Developed a responsive game from scratch using procedural language Racket.",
                "Used SQLite as local database and Postgres on Heroku."
            ]
        },
        {
            project: "Music Mash",
            link: "https://github.com/leangseu/AndroidMusicMash",
            img: MusicMash,
            header: "Android Application",
            description: [
                "The application allows users to play music from YouTube and Napster API services."
            ]
        },
        {
            project: "AutomaText",
            link: "https://github.com/leangseu/AndroidAutomaText",
            img: AutomaText,
            header: "Android Application",
            description: [
                "Allow users to schedule a text message to send at specific time and date.",
                "Used SQLite as local database and Postgres on the backend."
            ]
        },
        {
            project: "Messenger Translator",
            link: "https://www.facebook.com/mTranslator/",
            img: Messenger,
            header: "Facebook Messenger",
            description: [
                "Using express and google translate API to create a responsive bot on Facebook."
            ]
        }
    ]
}

export {
    about,
    skills,
    educations,
    experiences,
    projects
}