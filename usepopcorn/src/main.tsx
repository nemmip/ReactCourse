import {StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import StarRating from "./components/main/star/StarRating.tsx";
function Test () {
    const [moveRating, setMoveRating] = useState<number>(0)
    return <div>
        <StarRating color={"blue"} maxRating={10} onSetRating={setMoveRating} />
        <p>This movie was rated {moveRating} stars</p>
    </div>
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
      <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
      <StarRating size={24} color={"red"} className={"test"} defaultRating={3}/>
      <Test/>
  </StrictMode>,
)
