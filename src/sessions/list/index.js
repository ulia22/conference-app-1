import * as $ from "jquery"
import TalkService from '../../common/talk.service'

export default class SessionsList {

    constructor(talkService) {
        this.TalkService = talkService
    }

    render(idViewAllSessions) {

        let tab = this.TalkService.findAllSession()
        tab.then((tab) => {
                this.rendu = `<ul id="listeSessions">`
                for (var i = 0; i < tab.length; i++) {
                    this.rendu += '<li><a href=#session-detail=' + tab[i].id + '>' + tab[i].title + '</a></li>'
                }
                this.rendu += `</ul>`
                    /* console.log(this.rendu); */
                $(idViewAllSessions).html($(idViewAllSessions).html() + this.rendu)
            },
            (err) => { console.log("Erreur !"); })
    }
}
