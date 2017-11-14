import * as $ from "jquery"
import TalkService from '../../common/talk.service'

export default class SpeakerList {

    constructor(talkService) {
        this.TalkService = talkService
    }

    render(idView) {

      let tab = this.TalkService.findAllSpeakers()
      console.log(tab);
      tab
      .then((tab)=>{
        this.rendu = `<ul id="listePres">`
        for(var i = 0; i < tab.length; i++){
          this.rendu += `<li><a href="">`+tab[i].firstname+" "+tab[i].lastname+`</a></li>`
        }
        this.rendu += `</ul>`
        console.log(this.rendu);
        $(idView).html(this.rendu)
      },
      (err)=>{console.log("Erreur !");})

    }
}
