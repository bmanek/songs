import React from 'react'
// titling file in ./actions as index.js means we can use cleaner syntax below
// import { selectSong } from '../actions'   (not necessary in this case)
import SongList from './SongList'
import SongDetail from './SongDetail'

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  )
}

export default App
