import { useState } from "react"

function Body(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

function DeleteButton({topics, onClick}) {
  

  return (
    <button onClick={onClick}>삭제</button>
  )
}

// 메인 컴포넌트
function Content({topics}) { // props는 App에서 topics를 의미
  const [showBodyIndex, setShowBodyIndex] = useState(0)

  function Li({num, title}) { // topics의 특정 인덱스의 num, title 의미
    function changeBody() {
      // console.log(num, title)
      setShowBodyIndex(num)
    }
  
    return (
      <li onClick={changeBody}>{title}</li>
    )
  }

  function LiBucket({topics}) {
    let element = []
    for (let i=1; i<topics.length; i++) {
      element.push(<Li key={i} num={topics[i].num} title={topics[i].title}/>)
    }
    // console.log(element)
    return element
  }

  return (
    <div>
      <h1 onClick={() => {setShowBodyIndex(0)}}>Welcome</h1>
      <ol>
        <LiBucket topics={topics} />
      </ol>
      <Body title={topics[showBodyIndex].title} body={topics[showBodyIndex].body}/>
      
    </div>
  )
}

export {Content, DeleteButton}