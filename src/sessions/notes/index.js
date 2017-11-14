import * as $ from "jquery"
import TalkService from '../../common/talk.service'

export default class SessionNote {
    render(idView, idSession) {
        var detail = new TalkService();
        detail.findSessionById(idSession).then(session => {
                $("#" + idView).html(
                    `
                        <br>
                        <div class="container">
                            <div class="row ">
                                <input type="submit" class="btn btn-primary col-xs-5">
                            </div>
                            <br>
                            <h3 style="margin-left: -1.5%;">${session.title} - ${session.id}</h3>
                            <div class="form-group" style="margin-left: -1.5%;">
                                <textarea class="form-control" rows="3">${session.desc}</textarea>
                            </div>

                            <div class="row ">
                            <a href="#sessions-list" class="btn btn-primary col-xs-5">retour à la liste des sessions</a>
                        </div>
                        </div>
                        
                    `
                )
            }, this)
            .catch()
    }
}