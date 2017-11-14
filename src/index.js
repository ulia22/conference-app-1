// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

//Import
import TalkService from './common/talk.service';
import Layout from './layout/index.js'
import SpeakerList from './speakers/list/index.js'
import CorpAccueil from './accueil/index.js'
import Speaker from './speakers/displayOneSpeaker/index.js'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()
const speakerList = new SpeakerList(talkService)
const speaker = new Speaker(talkService)


//Routeur
function parseAncor(locationHash){
  if(!locationHash.includes('?')){
    return locationHash
  }else{
    return locationHash.split('?')[0]
  }
}

function parseParam(locationHash){
  let param
  if(!locationHash.includes('?')){
    return param;
  }else{
    let params = locationHash.split('?')[1]
    param = params.split('=')[1]
    return param
  }
}
//interlocuteurvar router = () => {
var router = () => {
  let layoutDefault = new Layout()
  layoutDefault.render();
  if (parseAncor(location.hash) == '#speakers-list') {
    if(!parseParam(location.hash)){
      speakerList.render('body')
    }else{
      speaker.render(parseParam(location.hash));
    }
  } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
  }else if (location.hash == '#' || location.hash == '') {
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
