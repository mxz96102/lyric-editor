/**
 * Created by mxz on 2017/7/19.
 */
// import GlobalBus from '../components/GlobalBus'

function getRandomColor () {
  return '#' + ('000000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
}

function getUniqueId () {
  return '*' + ('m' + (Math.random() * 0x1000000 << 0).toString(16) + 'd').slice(-7)
}

function timeToLabel (time) {
  return '[' + ('00' + Math.floor(time / 60)).slice(-2) + ':' + ('00' + (time % 60).toFixed(2).toString()).slice(-5) + ']'
}

export default class Point {
  constructor (time, labelText, lyric) {
    this.time = time
    this.labelText = labelText
    this.color = getRandomColor()
    this.editable = true
    this.id = getUniqueId()
    this.label = timeToLabel(time)
    this.lyric = lyric
  }

}
