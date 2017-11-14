import * as $ from "jquery"
import TalkService from '../../common/talk.service'



export default class SessionNote {

    render(idView, idSession) {
        var detail = new TalkService();
        detail.findSessionById(idSession).then(session => {
                $("#" + idView).html(
                    `
                        <div class="list-group ">
                            <a href="#sessions-list" class="list-group-item">Retour à la liste des sessions</a>
                        </div>
                        <br>
                        <div class="container">
                            <h3 style="margin-left: -1.5%;">${session.title} - ${session.id}</h3>
                            <br>
                            <div class="row ">
                                <div class="col">
                                    <button type="button" onclick="localStorage['${session.id}']= document.getElementById('textarea_id').value;window.location.href='#sessions-list'"" class="btn btn-secondary" style="width:100%;">Enregistrer</button><br>
                                </div>
                            </div>
                            <br>
                            <div class="form-group" style="margin-left: -1.5%;">
                                <textarea id="textarea_id" class="form-control" rows="3">${localStorage.getItem(session.id)}</textarea>
                            </div>
                        </div>
                        
                    `
                )
            }, this)
            .catch()
    }
}