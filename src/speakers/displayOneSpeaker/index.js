import TalkService from '../../common/talk.service'
import speakerCorp from './speaker.html'

export default class Speaker {

  constructor(talkService) {
    this.TalkService = talkService
  }
  findSpeakerFromId(id){
    let tab = this.TalkService.findAllSpeakers()
    this.theSpeaker = tab
    .then((tab)=>{
      for(var i = 0; i < tab.length; i++){
        if(tab[i].id == id){
          return tab[i]
        }
      }
    },
    (err)=>{console.log("Erreur findSpeakerFromId !");})
  }

  render(idSpeaker) {
    this.theSpeaker = null;
    this.findSpeakerFromId(idSpeaker)
    this.theSpeaker
    .then((speaker)=>{
      $('body').html($('body').html()+speakerCorp)
      $('img').attr('src', "../image/"+speaker.image)
      $('#name').html(`${speaker.firstname} ${speaker.lastname}`)
    })
    // if(this.theSpeaker){
    //   $('body').html($('body').html()+speakerCorp)
    //   $('img').attr('src', this.theSpeaker.image)
    //   $('#name').html(`${this.theSpeaker.firstname} ${this.theSpeaker.lastname}`)
    // }else{
    //   console.log("Speaker not found.");
    // }


  }
}
