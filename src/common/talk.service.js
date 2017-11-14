var data = require('../../db.json');
export default class TalkService {

    /* findAllSpeakers() {
        return [{ id: 'sp1', fullname: 'hello' }];
    } */

    /* Requete promesse qui retourne un tableau de présentateur */
    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/speakers/", (speakers) => {
                resolve(speakers)
            })
        })
    }

    /* Trouver toutes les sessions */
    findAllSession() {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                resolve(sessions)
            })
        })
    }

    /* Trouve la session par l'id */
    findSessionById(id) {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                sessions.forEach(session => {
                    if (session.id === id) {
                        resolve(session)
                    }
                })
            })
        })
    }

    findSpeakerById(id) {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/speakers/" + id, (speaker) => {
                resolve(speaker)
            })
        })
    }

    findAllSessionsBySpeakerId(id) {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                //Liste des sessions auxquelles un presentateur a participé
                let sessionPres = []
                    //Est-ce que les sessions ont été recup
                if (sessions) {
                    //Pour chaque session
                    for (var indexSession in sessions) {
                        //Si la session a des speakers
                        if (sessions[indexSession].speakers) {
                            //Pour chaque speaker
                            for (var indexSpeaker in sessions[indexSession].speakers) {
                                //Si un des speaker a le meme id qu l'id fournis, je met la session dans sessionPres
                                if (sessions[indexSession].speakers[indexSpeaker] == id) {
                                    sessionPres.push(sessions[indexSession])
                                }
                            }
                        }
                    }
                }
                resolve(sessionPres)
            })
        })
    }
}