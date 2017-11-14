import accueil from './corpAccueil.html'

export default class CorpAccueil{
  render(){
    $('body').html($('body').html()+accueil);
  }
}
