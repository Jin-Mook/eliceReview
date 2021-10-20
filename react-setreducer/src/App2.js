import {useContext} from 'react'
import {context} from './store/users.js'

function App2() {
  const {name, age, city, printConsole} = useContext(context)
  printConsole("hi")

  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>city: {city}</h2>
    </div>
  )
}

export default App2