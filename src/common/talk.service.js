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


    findAllSession() {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                resolve(sessions)
            })
        })
    }

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
}