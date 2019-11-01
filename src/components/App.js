import React from 'react'
// titling file in ./actions as index.js means we can use cleaner syntax below
// import { selectSong } from '../actions'   (not necessary in this case)
import SongList from './SongList'

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  )
}

export default App
