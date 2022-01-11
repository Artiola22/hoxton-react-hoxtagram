import { useEffect, useState } from 'react'
import ImageContainer from '../components/ImageContainer/ImageContainer'
import Logo from '../components/Logo/Logo'

import './App.css'

function App() {
  const [data, setData] = useState([])
  

  function getDataFromServer(){
    fetch(`http://localhost:3001/images`).then(resp => resp.json())
    .then(data => setData(data)) 
    
  }
  useEffect(getDataFromServer, [])

  function likeImage(image) {
    fetch(`http://localhost:3001/images/${image.id}`, {
      method: "PATCH", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: image.likes + 1})
    })
      // Update the server
      
      const updatedImages = JSON.parse(JSON.stringify(data))
      // const updatedImages= [...images]
      console.log(updatedImages)
    const match = updatedImages.find(target => target.id === image.id)
    match.likes++
    setData(updatedImages)
  }
  return (
    <div className="App">
     {/* <!-- logo --> */}
    <Logo />

    {/* <!-- image cards --> */}
    <ImageContainer  data={data} likeImage={likeImage} />
      {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}

      
    </div>
  )
}

export default App
