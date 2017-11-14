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
}