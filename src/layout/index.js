import layout from './layout.html'

export default class Layout{
  render(){
    console.log("troll");
    $('body').html(layout);
  }
}
