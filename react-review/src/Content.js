import { useState } from "react"

function Body(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

// 메인 컴포넌트
function Content(props) {
  const [showBodyIndex, setShowBodyIndex] = useState(0)

  function Li(props) {
    function changeBody() {
      setShowBodyIndex(props.id)
    }
  
    return (
      <li onClick={changeBody}>{props.title}</li>
    )
  }

  return (
    <div>
      <h1 onClick={() => {setShowBodyIndex(0)}}>Welcome</h1>
      <ol>
        <Li id={props.topic[1].key} title={props.topic[1].title}/>
        <Li id={props.topic[2].key} title={props.topic[2].title}/>
      </ol>
      <Body title={props.topic[showBodyIndex].title} body={props.topic[showBodyIndex].body}/>
      
    </div>
  )
}

export default Content