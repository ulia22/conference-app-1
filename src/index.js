// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

//Import
import TalkService from './common/talk.service';
import Layout from './layout/index.js'
import SpeakerList from './speakers/list/index.js'
import SessionsList from './sessions/list/index.js'
import SessionDetail from './sessions/detail/index.js'
import SessionNote from './sessions/notes/index.js'
import CorpAccueil from './accueil/index.js'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()
const speakerList = new SpeakerList(talkService)
const sessionList = new SessionsList(talkService)


//Routeur
//interlocuteurvar router = () => {
var router = () => {
    let layoutDefault = new Layout()
    layoutDefault.render();

    let sessionDetail = new SessionDetail()
    let sessionNote = new SessionNote()


    if (location.hash == '#speakers-list') {
        speakerList.render('body')
    } else if (location.hash == '') {
        // affiche 
        let corpAccueilDefault = new CorpAccueil()
        corpAccueilDefault.render()
    } else if (location.hash == '#sessions-list') {
        // TODO afficher vue liste des sessions 
        sessionList.render('body')
    } else {
        var url = location.hash.split('=')
        var nom = url[0]
        var param = url[1]
        if (nom == '#session-detail') {
            sessionDetail.render('main-view', param)
        } else if (nom == '#notes') {
            sessionNote.render('main-view', param)

        } else {
            layoutDefault.render()
        }
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});