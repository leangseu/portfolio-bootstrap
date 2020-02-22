// projects
import Messenger from '../images/projects/messenger.gif'
import TimberMan from '../images/projects/timberman.gif'
import MusicMash from '../images/projects/MusicMash.gif'
import AutomaText from '../images/projects/AutomaText.gif'

export default {
  header: "PROJECTS",
  data: [
    {
      project: "Messenger Translator",
      link: "https://www.facebook.com/mTranslator/",
      img: Messenger,
      header: "Facebook Messenger",
      description: [
        "A facebook messenger bot that translate message to English",
        "Built with ExpressJs, google translate API, FacebookSDK"
      ]
    },
    {
      project: "Timber Man",
      link: "https://github.com/oplS17projects/Timberman",
      img: TimberMan,
      header: "Window & Mac",
      description: [
        "Developed a responsive game using procedural language Racket",
        "Built with Racket, SQLite, Postgres, Heroku"
      ]
    },
    {
      project: "Music Mash",
      link: "https://github.com/leangseu/AndroidMusicMash",
      img: MusicMash,
      header: "Android Application",
      description: [
        "The application allows users to play music from YouTube and Napster API services",
        "Built with Android SDK, YouTube API, Napster API"
      ]
    },
    {
      project: "AutomaText",
      link: "https://github.com/leangseu/AndroidAutomaText",
      img: AutomaText,
      header: "Android Application",
      description: [
        "Allow users to schedule a text message to send at a specific time and date",
        "Built with Android Studio, SQLite, Postgres, Twilio, Python"
      ]
    }
  ]
}