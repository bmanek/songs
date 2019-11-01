import React from 'react'
// titling file in ./actions as index.js means we can use cleaner syntax below
// import { selectSong } from '../actions'   (not necessary in this case)
import SongList from './SongList'

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  )
}

export default App
