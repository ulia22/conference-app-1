var data = require('../../db.json');
export default class TalkService {

  /* findAllSpeakers() {
  return [{ id: 'sp1', fullname: 'hello' }];
} */

/* Requete promesse qui retourne un tableau de présentateur */
findAllSpeakers() {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json")
  .then (speakersString => JSON.parse(speakersString))
}

/* Trouver toutes les sessions */
findAllSession() {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/sessions.json")
  .then(sessionString => JSON.parse(sessionString))
}

/* Trouve la session par l'id */
findSessionById(id) {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/sessions.json")
  .then(sessionsString=>{
    let sessions = JSON.parse(sessionsString)
    return sessions.find(session => session.id === id)
  })
}

findSpeakerById(id) {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json")
  .then(speakersString =>{
    let speakers = JSON.parse(speakersString)
    return speakers.find(speaker => speaker.id === id)
  })
}

findAllSessionsBySpeakerId(id) {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/sessions.json")
  .then(sessionsString=>{
    let sessions = JSON.parse(sessionsString)
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
    return(sessionPres)
  })
}

findAllSpeakersFromSessionBySpeakersIds(ids) {
  return $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json")
  .then(speakersString =>{
    let speakers = JSON.parse(speakersString)
    //La listes des speakers avec les ids
    let speakersList = []
    //Si tous les speakers ont bien été récup
    if(speakers){
      //Pour chaque speakers
      for (var indexSpeaker in speakers) {
        //Pour chaque ids
        for (var i in ids) {
          if (ids[i] == speakers[indexSpeaker].id) {
            speakersList.push(speakers[indexSpeaker])
          }
        }
      }
    }
    return(speakersList)
  })
}
}
