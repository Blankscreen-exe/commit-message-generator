import { useState } from 'react'
import Form from './components/Form'

function App() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  return (
    <div className="App">
      <Form 
        // setTitle={setTitle}
        // setBody={setBody}
        />
      <Display
        title={title}
        body={body}
        />
    </div>
  )
}

export default App
