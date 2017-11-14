import * as $ from "jquery"
import TalkService from '../../common/talk.service'

export default class SessionDetail {
    render(idView, idSession) {
        var detail = new TalkService();
        detail.findSessionById(idSession).then(session => {
                $("#" + idView).html(
                    `
                        
                        <div class="container">
                            <a href="#sessions-list" class="list-group-item">Retour à la liste des sessions</a>
                            <br>
                            <div class="col"
                                <h3 style="margin-left: -1.5%;" class="row">${session.title}</h3>
                            
                                <div class="form-group" style="margin-left: -1.5%;" >
                                    ${session.desc}
                                </div>
                                <div  class="col"><div class="col style="margin-top" id="speakers"></div></div>
                                <br>
                                <div class="col">
                                    <a href="#notes=${session.id}" class="col btn btn-secondary col-xs-5">Mes notes</a>
                                </div>
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
                          <div class="col"><img src="../image/${speakers[i].image}" style="min-width:20%; max-width:100%;"/></div>
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