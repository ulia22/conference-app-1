
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
console.log("Lol");
let layoutRender = new Layout()
layoutRender.render()
