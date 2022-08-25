import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import useFecth from './hooks/useFecth'
import Locationinfo from './components/Locationinfo'
import { useEffect } from 'react'
import axios from 'axios'
import CardResident from './components/CardResident'

function App() {
 const [location, setlocation] = useState()
 const [searchInput, setsearchInput] = useState('')
  
 //Cell redondea siempre asia arriba y da un numero del 1 al 126
 
 useEffect(() => {

  let numberLocation 
  if(searchInput === ''){
    numberLocation = Math.floor(Math.random() * (126 -1) + 1)
  }else{
    numberLocation = searchInput
  }
  
  const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setlocation(res.data))
    .catch(err => console.log(err))
  },[searchInput])



// Math.floor(Math.random()*257)


 
  
const handleSubmit = e => {
  e.preventDefault()

  setsearchInput( e.target.search.value)
}

console.log(searchInput)

  return (
    <div className="App">
        <div class="container__background-triamgle">
        <div class="triangle triangle1"></div>
        <div class="triangle triangle2"></div>
      
    </div>
     <h1>Rick and Morty</h1>
     <form onSubmit={handleSubmit}>
     <input id='search'  type="text" />
     <button>Search</button>
     </form>
   <Locationinfo location={location}></Locationinfo>
   <div>
    {
      location?.residents.map(url => {
        return <CardResident
        //siempre que haga un map, pongamos la key virtual doom compare y si son iguales lo vueleve a renderizar
        key={url}
        url={url}
        />
      })
    }
   </div>
    </div>
  )
}

export default App
