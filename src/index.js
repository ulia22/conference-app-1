
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';

// intégration JQuery
window.$ = window.jQuery = require('jquery');

//Intégration du Layout renderer
import Layout from './layout'

const talkService = new TalkService()

const tabSpeakers = talkService.findAllSpeakers()
<<<<<<< HEAD

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
=======
console.log("Lol");
let layoutRender = new Layout()
layoutRender.render()
>>>>>>> 18506394f2ce78d175136032ea2e6a1fbd88f97d
