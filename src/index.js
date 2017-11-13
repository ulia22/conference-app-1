
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