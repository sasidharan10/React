import './App.css'
import ScoreKeeper from './08_state_objects'
import ScoreKeeper2 from './11_scoreKeeper'
import EmojiClicker from './09_emoji_clicker'


function App() {
  return (
    <>
    {/* <ScoreKeeper /> */}
    {/* <EmojiClicker /> */}
    <ScoreKeeper2 numPlayer={6} target={3}/>
    </>
  )
}

export default App
