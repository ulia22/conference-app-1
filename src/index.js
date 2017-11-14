// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';
import Layout from './layout/index.js'
import SpeakerList from './speakers/list/index.js'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

/* Création objet de layout */
let layoutDefault = new Layout()
layoutDefault.render()

const tabSpeakers = talkService.findAllSpeakers()

console.log(tabSpeakers)