import { useState } from 'react';
import {Content, DeleteButton} from './Content'
import PushForm from './PushForm'



function App() {
  const [num, setNum] = useState(3)

  
  const [topics, setTopics] = useState([
    {num: 0, title: "hello", body: "main page"},
    {num: 1, title: "html", body: "html is ..."},
    {num: 2, title: "css", body: "css is ..."},
  ])
  
  

  function handleClick() {
    const newTopics = [...topics]
    newTopics.pop()
    setTopics(newTopics)
    setNum(topics.length)

  }

  return (
    <>
      <Content topics={topics}/>
      <PushForm topics={topics} num={num} setNum={setNum} setTopics={setTopics}/>
      <DeleteButton topics={topics} onClick={handleClick}>삭제</DeleteButton>
    </>
  );
}

export default App;
