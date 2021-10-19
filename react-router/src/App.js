import {Route ,Link, useParams} from 'react-router-dom'
import {useState} from 'react'

function Header() {

  return (
    <header>
      <Link to='/'><h1>WEB</h1></Link>
    </header>
  )
}

function Nav(props) {
  const liArray = props.topics.map(el => {
    return (
      <li key={el.id}><Link to={"/read/" + el.id}>{el.title}</Link></li>
    )
  })

  return (
    <nav>
      <ol>
        {liArray}
      </ol>
    </nav>
  )
}

function Article(props) {

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Read(props) {
  const params = useParams()
  const id = Number(params.id)
  let title, body;
  for (let i=0; i <props.topics.length; i++) {
    let topic = props.topics[i];
    if (topic.id === id) {
      title = topic.title;
      body = topic.body;
    }
  }

  return (
    <Article title={title} body={body}></Article>
  )
}


function App() {
  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
  ])

  return (
    <div>
      <Header />
      <Nav topics={topics}/>
      <Route exact path='/'>
        <Article title="welcome" body="Hello, WEB"></Article>
      </Route>
      <Route path='/read/:id'>
        <Read topics={topics}/>
      </Route>
    </div>
  );
}

export default App;