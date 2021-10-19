import {Route ,Link} from 'react-router-dom'

function App() {

  function Header() {

    return (
      <header>
        <Link to='/'><h1>WEB</h1></Link>
      </header>
    )
  }

  function Nav() {

    return (
      <nav>
        <ol>
          <li><Link to="/read/1">html</Link></li>
          <li><Link to="/read/2">css</Link></li>
        </ol>
      </nav>
    )
  }

  function Article() {

    return (
      <article>
        <h2>Welcome</h2>
        Hello, React
      </article>
    )
  }



  return (
    <div>
      <Header />
      <Nav />
      <Route exact path='/'>Welcom</Route>
      <Route path='/read/:id'>Read</Route>
    </div>
  );
}

export default App;