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

                                <br>
                                <h3>${session.title}</h3>
                                
                                <div class="form-group" >
                                    ${session.desc}
                                </div>
    
                                <div class="row">
                                    <a href="#notes=${session.id}" class="btn btn-primary col-xs-5">Mes notes</a>
                                </div>
                            </div>
                            
                        </div>
                    `
                )
            }, this)
            .catch()
    }
}