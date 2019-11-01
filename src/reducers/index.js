import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Life in a Glasshouse', duration: '3:51'},
    { title: 'I Might Be Wrong', duration: '4:53'},
    { title: 'Unsatisfied', duration: '4:02'},
    { title: 'Somebody That I Used To Know', duration: '2:08'},
    { title: 'Come On Up To The House', duration: '4:39'},
    { title: "La Femme d'Argent", duration: '7:12'},
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
