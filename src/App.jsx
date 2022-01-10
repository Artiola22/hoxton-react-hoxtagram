import { useEffect, useState } from 'react'
import ImageContainer from '../components/ImageContainer/ImageContainer'
import Logo from '../components/Logo/Logo'

import './App.css'

function App() {
  const [data, setData] = useState([])

  function getDataFromServer(){
    fetch(`http://localhost:3000/images`).then(resp => resp.json())
    .then(data => setData(data)) 
    
  }
  useEffect(getDataFromServer, [])
  return (
    <div className="App">
     {/* <!-- logo --> */}
    <Logo />

    {/* <!-- image cards --> */}
    <ImageContainer  data={data} />
      {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}

      
    </div>
  )
}

export default App
