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
        this.rendu = `<ul id="listePres" class="list-group">`
        for(var i = 0; i < tab.length; i++){
          this.rendu += `<li class="list-group-item"><a href="#speakers-list?id=${tab[i].id}"><span class="glyphicon glyphicon-chevron-right pull-right"></span>`+tab[i].firstname+" "+tab[i].lastname+`</a></li>`
        }
        this.rendu += `</ul>`
        console.log(this.rendu);
        $('body').html($('body').html()+this.rendu)
      },
      (err)=>{console.log("Erreur !");})
  }
}
