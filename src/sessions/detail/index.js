import * as $ from "jquery"
import TalkService from '../../common/talk.service'

export default class SessionDetail {
    render(idView, idSession) {
        var detail = new TalkService();
        detail.findSessionById(idSession).then(session => {
                $("#" + idView).html(
                    `
                        <br>
                        <div class="container">
                            <div class="row">
                            <a href="#sessions-list" class="btn btn-primary col-xs-5">retour à la liste des sessions</a>
                            </div>
                            <br>
                            <h3 style="margin-left: -1.5%;">${session.title}</h3>
                            
                            <div class="form-group" style="margin-left: -1.5%;" >
                                ${session.desc}
                            </div>
                            <div  class="row"><div class="col" id="speakers"></div></div>
                            <div class="row">
                            <a href="#notes=${session.id}" class="btn btn-primary col-xs-5">Mes notes</a>
                        </div>
                        </div>
                    `
                )
                if (session.speakers) {
                    console.log(session.speakers);
                    detail.findAllSpeakersFromSessionBySpeakersIds(session.speakers).then(speakers => {
                        let s = '';
                        for (var i in speakers) {
                            s += `
                      <div class="row">
                          <div class="col"><img src="../image/${speakers[i].image}"/></div>
                          <div class="col"><a href="#speakers-list?id=${speakers[i].id}">${speakers[i].firstname} ${speakers[i].lastname}</a></div>
                      </div>`
                        }
                        $('#speakers').html(s)
                    }, this)
                }
            }, this)
            .catch()
    }
}