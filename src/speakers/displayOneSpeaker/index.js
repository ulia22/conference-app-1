import TalkService from '../../common/talk.service'
import speakerCorp from './speaker.html'

export default class Speaker {

    constructor(talkService) {
        this.TalkService = talkService
    }


    render(idSpeaker) {
        let speaker = this.TalkService.findSpeakerById(idSpeaker)

        speaker.then((speaker) => {
            $('body').html($('body').html() + speakerCorp)
            $('img').attr('src', "../image/" + speaker.image)
            $('#name').html(`${speaker.firstname} ${speaker.lastname}`)
            if (speaker.socials) {
                $('#liensReseaux').html('<ul>')
                for (var index in speaker.socials) {
                    let href = speaker.socials[index].link
                    let text = speaker.socials[index].class
                    let link = `<a href='${href}'>${text}</a><br/>`
                    $('#liensReseaux').html($('#liensReseaux').html() + '<li class="list-unstyled">' + link + '</li>')
                }
                $('#liensReseaux').html($('#liensReseaux').html() + '</ul>')
            }
            let session = this.TalkService.findAllSessionsBySpeakerId(idSpeaker)
            session.then((sessions) => {
                $('#presentation').html('<h5>Ses présentations</h5> <ul>')
                for (var indexSession in sessions) {
                    let title = sessions[indexSession].title
                    let href = `#session-detail=` + sessions[indexSession].id
                    let link = `<a href='${href}'>${title}</a><br/>`
                    $('#presentation').html($('#presentation').html() + '<li class="list-unstyled">' + link + '</li>')
                }
                $('#presentation').html($('#presentation').html() + '</ul>')
            })
        })
    }
}