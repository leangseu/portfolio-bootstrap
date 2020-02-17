// projects
import Messenger from '../images/projects/messenger.gif'
import TimberMan from '../images/projects/timberman.gif'
import MusicMash from '../images/projects/MusicMash.gif'
import AutomaText from '../images/projects/AutomaText.gif'

export default {
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