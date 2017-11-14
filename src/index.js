// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

//Import
import TalkService from './common/talk.service';
import Layout from './layout/index.js'
import SpeakerList from './speakers/list/index.js'
import CorpAccueil from './accueil/index.js'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()
const speakerList = new SpeakerList(talkService)


//Routeur
//interlocuteurvar router = () => {
var router = () => {
  let layoutDefault = new Layout()
  layoutDefault.render();
  if (location.hash == '#speakers-list') {
    speakerList.render('body')
  } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
  }else if (location.hash == '') {
    let corpAccueilDefault = new CorpAccueil()
    corpAccueilDefault.render()
  } else {
    // TODO afficher vue par défaut
  }
}
window.addEventListener('load', () => {
  window.onhashchange = () => {
    router();
  };
  router();
});