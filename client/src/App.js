import React, {useState, useEffect} from 'react'
import Search from './components/Search'

const App = () => {

  const [data,setData] = useState([{}])

  useEffect( () => {
      fetch("/members").then(
          res => res.json()
      ).then(
         data=>{
            setData(data)
            console.log(data)
         }
      )

  },[])

  return (
    <div>
      <h1>Hello</h1>
      <Search/>
          {
          (typeof data.members === 'undefined') ?
            <p>Loaders . . .</p>
            :
            data.members.map(
              (member,i) => 
              (<p key = {i}>{member}</p>)
            )
          }
    </div>
  )
}

export default App