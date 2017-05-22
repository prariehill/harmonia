const React = require('react')
import config from './story.json'
import {Map, Game, startGame} from 'windrift'
import { cards } from './reducers'


function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
  var game = <Game chaptersList={chaptersList} config={config}/>
  var reducers = { cards }
  var store = startGame(game, reducers)
}

document.addEventListener('DOMContentLoaded', function () {
  start()
})