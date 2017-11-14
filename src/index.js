
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

const tabSpeakers = talkService.findAllSpeakers()

console.log(tabSpeakers)

var router = () => {
    if (location.hash == '#speakers-list') {
    // TODO afficher vue liste des présentateurs
    } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
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