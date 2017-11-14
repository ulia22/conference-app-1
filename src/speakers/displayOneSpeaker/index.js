import TalkService from '../../common/talk.service'
import speakerCorp from './speaker.html'

export default class Speaker {

  constructor(talkService) {
    this.TalkService = talkService
  }

  render(idSpeaker) {
    let speaker = findSpeakerFromId(idSpeaker)
    if(speaker){
      $('body').html($('body').html()+speakerCorp)
      $('img').attr('src', speaker.image)
      $('#name').html(`${speaker.firstname} ${speaker.lastname}`)
    }else{
      console.log("Speaker not found.");
    }


  }

  findSpeakerFromId(id){
    let tab = this.TalkService.findAllSpeakers()
    let theSpeaker
    tab
    .then((tab)=>{
      for(var i = 0; i < tab.length; i++){
        if(tab[i].id == id){
          theSpeaker = tab[i]
        }
      }
      return theSpeaker
    },
    (err)=>{console.log("Erreur findSpeakerFromId !");})
  }
}
